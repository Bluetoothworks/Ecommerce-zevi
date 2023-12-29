
const FilterSection = (props) =>{
    const data=props.data;
    const t=props.head==="RATINGS"?1:0
    // if(t==1)
    //     console.log(t)
    
    return(
        <div>
        <div className="title2">{props.head}</div>
        {data && data.map((item)=>(
    <div key={item}>
        <input type="checkbox"  name="itemId" defaultValue={item} />
        <label className="checkBx" htmlFor="itemId"> {t==1?<img className="logoimg" src={item} />:(item.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))}</label>
        <br />
    </div>
))}


        
  <div className={`${t==0?"bar":""}`}></div>
  </div>
    )
}
export default FilterSection