type Props = {
 name:string
}

export default function CategoryCard({name}:Props){

 return(

  <div style={{
    border:"1px solid #eee",
    padding:"20px",
    borderRadius:"8px"
  }}>

   <h3>{name}</h3>

  </div>

 )

}