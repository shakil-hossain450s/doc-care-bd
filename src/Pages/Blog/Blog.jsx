import { CalendarDays } from "lucide-react";

const Blog = ({ blog, index }) => {
  const { title, answer, addedDate } = blog;

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm text-[#0F0F0F]'>

      <h4 className='text-lg font-bold '>{index}. {title}</h4>
      <div className="border-b-2 border-dashed border-[#0F0F0F33] my-4"></div>
      <p className="text-[#176AE5] font-semibold mb-2">Answer: </p>
      <p>{answer}</p>
      <div className="border-b-2 border-dashed border-[#0F0F0F33] my-4"></div>

      <div>
        <p className="text-[#3f3e3e] flex items-center gap-3">
          <CalendarDays /> 
          <span className="font-medium ">Added at {addedDate}</span>
        </p>
      </div>


    </div>
  );
};

export default Blog;