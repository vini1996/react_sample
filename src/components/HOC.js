import React from "react";

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component{
        state = {
            data : [],
            term : ('')
        };
        componentDidMount() {
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                let user = await res.json()
                this.setState({...this.state, data : user})
                // console.log(user)
              }
              fetchData()
        }
        render(){
           let {term, data} = this.state;
           let filteredData = data.filter((d) => {
            if(entity === "users"){
                const {name} = d;
                return name.indexOf(term) >= 0;
            }
            if (entity === "todos"){
                const {title} = d;
                return title.indexOf(term) >= 0;
            }
           });
           return (
            <>
            <h2>{entity}</h2>
            <input type = 'text' value = {term} onChange={(e) => this.setState({...this.state, term:e.target.value})}/>
            <WrappedComponent data = {filteredData}></WrappedComponent>
            </>
            
           )
        }
    }
}

export default HOC;