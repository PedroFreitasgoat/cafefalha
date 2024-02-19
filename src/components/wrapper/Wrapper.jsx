import './Wrapper.sccs'

const Wrapper = ({clasName, children}) => {
  return <div className={`wrapper ${clasName || ""}`}>{children}</div>
  
};

export default Wrapper;