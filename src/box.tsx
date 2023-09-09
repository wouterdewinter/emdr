//import Animate from "react-smooth"
export function Box() {
    // style={{transform: "translate3d(00px, 0px, 0)"}}
    // const steps = [{
    //     style: {
    //         opacity: 0,
    //     },
    //     duration: 400,
    // }, {
    //     style: {
    //         opacity: 1,
    //         transform: 'translate(0, 0)',
    //     },
    //     duration: 1000,
    // }, {
    //     style: {
    //         transform: 'translate(100px, 100px)',
    //     },
    //     duration: 1200,
    // }];


    return <div style={{width: "1400px", height: "600px", backgroundColor: "#369"}}>
        {/*<Animate isActive={true} steps={steps}><div>lala<Circle /></div></Animate>*/}
        <div style={{  animation: "bobble infinite 1.5s cubic-bezier(.42,0,.58,1)", willChange: "transform"}}><Dot /></div>
    </div>
}

function Circle() {
    return <svg height="100" width="100">
        <circle style={{filter: "drop-shadow(0px 0px 5px #f33)"}} cx="50" cy="50" r="40" fill="#f33" />
    </svg>
}

function Dot() {
    return <div style={{backgroundColor: "#f33", width: "80px", height: "80px", position: "absolute", borderRadius: "40px", border: "solid 2px #fff"}} />
}