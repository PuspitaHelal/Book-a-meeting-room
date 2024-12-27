import React, { useState } from 'react';

interface MeetingRoom {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface Meeting {
  startDate: string;
 
  startTime: string;
  endTime: string;
  room: MeetingRoom;
  category: Category;
}

const rooms: MeetingRoom[] = [
  { id: 1, name: 'Room 1' },
  { id: 2, name: 'Room 2' },
  { id: 3, name: 'Room 3' },
];

const categories: Category[] = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
];

const MeetingRoomComponent = () => {
  const [startDate, setStartDate] = useState('');

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  const handleAddMeeting = () => {
    const newMeeting: Meeting = {
      startDate,
  
      startTime,
      endTime,
      room: selectedRoom,
      category: selectedCategory,
    };
    setMeetings([...meetings, newMeeting]);
  };

  const handlePrintMeetings = () => {
    console.log(meetings);
  };

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Meeting Room</h1>
      <form className="flex flex-col">
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 rounded border border-gray-400"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">End Date</label>
         
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="p-2 rounded border border-gray-400"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="p-2 rounded border border-gray-400"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">Room</label>
          <select
            value={selectedRoom.id}
            onChange={(e) =>
              setSelectedRoom(rooms.find((room) => room.id === parseInt(e.target.value))!)
            }
            className="p-2 rounded border border-gray-400"
          >
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">Category</label>
          <select
            value={selectedCategory.id}
            onChange={(e) =>
              setSelectedCategory(
                categories.find((category) => category.id === parseInt(e.target.value))!
              )
            }
            className="p-2 rounded border border-gray-400"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleAddMeeting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add Meeting
        </button>
        <button
          type="button"
          onClick={handlePrintMeetings}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Print Meetings
        </button>
      </form>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Meetings</h2>
        <ul>
          {meetings.map((meeting, index) => (
            <li key={index} className="mb-4">
              <p>
                {meeting.startDate} - {meeting.endDate}
              </p>
              <p>
                {meeting.startTime} - {meeting.endTime}
              </p>
              <p>Room: {meeting.room.name}</p>
              <p>Category: {meeting.category.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MeetingRoomComponent;