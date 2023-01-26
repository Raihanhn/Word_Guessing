const HEAD= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid orange',
        position:'absolute',
        top:'50px',
        right:'-30px',
    }} />
)

const BODY= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid blue',
        position:'absolute',
        top:'80px',
        right:'-30px',
    }} />
)

const LEFT_ARM= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid red',
        position:'absolute',
        top:'120px',
        right:'-30px',
    }} />
)

const RIGHT_ARM= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid yellow',
        position:'absolute',
        top:'150px',
        right:'-30px',
    }} />
)

const RIGHT_LEG= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid green',
        position:'absolute',
        top:'190px',
        right:'-30px',
    }} />
)

const LEFT_LEG= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid purple',
        position:'absolute',
        top:'220px',
        right:'-30px',
    }} />
)





export function HangmanDrawing() {
    return(
        <div style={{position:'relative'}}>
            {HEAD}
            {BODY}
            {LEFT_ARM}
            {RIGHT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}
            <div style={{height:'50px', width:'10px', background:'black', position:'absolute', top:'0', right:'0'}}/>
            <div style={{height:'10px', width:'200px', background:'black', marginLeft:'120px'}}/>
            <div style={{height:'400px', width:'10px', background:'black', marginLeft:'120px'}}/>
            <div style={{ height:'10px', width:"250px", background:'black' }}></div>
        </div>
    )
}