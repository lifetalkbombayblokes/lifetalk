const imageData = [
  {
    text: "I was looking for someone who could do counselling near me for depression, but couldn't find anything good. On LifeTalk, I found that I could connect with more experts, and since it's online I have a wide range to pick from.",
    image: "",
    name: "Ananya Pawar",
    designation: "Mumbai",
  },
  {
    text: "With LifeTalk, I had the freedom of connecting with Sex Therapists online, and that is such a relief.",
    image: "",
    name: "Aditya Tiwari",
    designation: "",
  },
  {
    text: "I was looking for a counsellor who could help me overcome my social anxiety. I wanted to do it in a private way, and online counselling with LifeTalk offered that and more! I am now working with a wonderful coach to overcome my social anxiety",
    image: "",
    name: "Bittu Singh",
    designation: "Mumbai",
  },


];
const Slider = () => {
  return (
    <div>
      <div className="grid  gap-4 w-full grid-cols-1 md:grid-cols-3 md:py-10">
        {imageData.map((item, index) => (
          <div key={index} className=" bg-[#FEFBEA] shadow-lg p-4 rounded-box flex flex-col items-center gap-2 justify-start text-center w-full">
            <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 6.74219V27.3672H38.4844L39.5156 29.2891L39.6562 33.8359C39.0625 36.2109 37.7344 37.7422 35.6719 38.4297L32.5781 39.4609L34.3594 43.5859L36.4219 43.0703C37.7969 42.7578 39.3125 42.0469 40.9688 40.9375C42.625 39.8281 44.1406 38.2266 45.5156 36.1328C46.9219 34.0391 47.625 31.2109 47.625 27.6484V6.74219H27ZM0.46875 27.3672H11.9531L12.9844 29.2891L13.125 33.8359C12.5312 36.2109 11.2031 37.7422 9.14062 38.4297L6.04688 39.4609L7.82812 43.5859L9.89062 43.0703C11.2969 42.7578 12.8281 42.0469 14.4844 40.9375C16.1406 39.8281 17.6562 38.2266 19.0312 36.1328C20.4062 34.0391 21.0938 31.2109 21.0938 27.6484V6.74219H0.46875V27.3672Z" fill="#26275F" />
            </svg>
            {item.text && <p>{item.text}</p>}
            {item.name && <p className="font-bold">{item.name}</p>}
            {item.designation && <p>{item.designation}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
