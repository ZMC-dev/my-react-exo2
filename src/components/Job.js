

const Job = (props) => {
  console.log(props);
  return  (
    //<div className={props.className}>
    <div>
      <div>
      {props.title}
      </div>
    <div>
      {props.contractType} {props.country} {props.city}
    </div>
   </div>
  );
};

export default Job;