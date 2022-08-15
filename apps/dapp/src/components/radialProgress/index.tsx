import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface PROPS {
  percentage: number;
  title: string;
  price: string;
}

const RadialProgress = ({ percentage, title, price }: PROPS) => {
  return (
    <div style={{ width: '200px', height: '200px', marginBottom: '200px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          // Customize the root svg element
          root: {
            boxShadow: '0px 0px 50px 5px rgb(255 50 198 / 80%)',
            borderRadius: '50%',
            boxSizing: 'border-box',
            border: '2px solid rgb(255 50 198 / 80%)',
          },
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `#DA458F`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            // strokeLinecap: 'unset',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
            // Rotate the path
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: 'black',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Rotate the trail
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          // Customize the text
          text: {
            // Text color
            fill: '#FFFFFF',
            // Text size
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            fontFamily: 'Drone Ranger Pro',
            lineHeight: '40px',
            textAlign: 'center',
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: '#FFFFFF',
          },
        }}
      />
      <p className="font-bold mt-6 text-center text-xl text-[#FBC625] font-Drone">
        {title}
      </p>
      <p className=" font-medium mt-2 text-xs text-white text-center not-italic font-Inter">
        {price}
      </p>
    </div>
  );
};

export default RadialProgress;
