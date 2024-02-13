
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';

const Room = () => {
  const { roomId } = useParams();
  const myMeetingRef = useRef(null);
  const [liveTranscription, setLiveTranscription] = useState('');

  const initializeSpeechToText = async () => {
    try {
      const mediaStream = myMeetingRef.current.querySelector('audio').srcObject;

      // Convert the audio to a blob
      const audioBlob = await streamToBlob(mediaStream);

      // Create a FormData object to send the blob
      const formData = new FormData();
      formData.append('audio', audioBlob);

      // Make a POST request to the AssemblyAI API
      const assemblyAiResponse = await axios.post(
        'https://api.assemblyai.com/v2/transcript',
        formData,
        {
          headers: {
            'authorization': '807b91265fad495eba1cb405959610e7',
            'content-type': 'multipart/form-data',
          },
        }
      );

      console.log('AssemblyAI Response:', assemblyAiResponse.data);

      const transcript = assemblyAiResponse.data.text;
      console.log('Transcription:', transcript);

      // Update the live transcription state
      setLiveTranscription(transcript);
    } catch (error) {
      console.error('Error initializing Speech-to-Text:', error);
    }
  };

  const streamToBlob = (stream) => {
    return new Promise((resolve, reject) => {
      const chunks = [];
      const streamController = new WritableStream({
        write(chunk) {
          chunks.push(chunk);
        },
        close() {
          resolve(new Blob(chunks, { type: 'audio/wav' }));
        },
        abort(error) {
          reject(error);
        },
      });

      const writableStream = stream.pipeTo(streamController);
    });
  };

  useEffect(() => {
    if (!('SpeechRecognition' in window)) {
      console.warn('SpeechRecognition is not supported in this browser.');
    }

    const appId = 1952345609;
    const serverSecret = '8b88341202f831f29d2aacf931c14efa';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      'User_name'
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: myMeetingRef.current,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });

    // Initialize Speech-to-Text
    initializeSpeechToText();

    return () => {
      // Check if there is a correct method for leaving the room
      if (zc.leaveRoom) {
        zc.leaveRoom();
      } else if (zc.logoutRoom) {
        zc.logoutRoom();
      } else {
        console.warn(
          'ZegoUIKitPrebuilt does not provide a leaveRoom or logoutRoom function.'
        );
      }
    };
  }, [roomId]);

  return (
    <div>
      <center>
        <div ref={myMeetingRef} />
        <div>
          <h2>Live Transcription:</h2>
          <p>{liveTranscription}</p>
        </div>
      </center>
    </div>
  );
};

export default Room;
