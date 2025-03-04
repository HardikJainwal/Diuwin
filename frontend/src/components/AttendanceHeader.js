import { ArrowLeft } from 'lucide-react';

const AttendanceHeader = () => {
  return (
    <div className="bg-black text-white p-4 flex items-center align-middle">
      <button onClick={() => window.history.back()} className="mr-2">
        <ArrowLeft size={24} />
      </button>
      <h2 className="text-lg font-semibold">Attendance</h2>
    </div>
  );
};

export default AttendanceHeader;