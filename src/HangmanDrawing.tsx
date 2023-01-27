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
        top:'50px',
        right:'-90px',
    }} />
)

const LEFT_ARM= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid red',
        position:'absolute',
        top:'90px',
        right:'0px',
    }} />
)

const RIGHT_ARM= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid yellow',
        position:'absolute',
        top:'50px',
        right:'30px',
    }} />
)

const RIGHT_LEG= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid green',
        position:'absolute',
        top:'96px',
        right:'-60px',
    }} />
)

const LEFT_LEG= (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius:'100%',
        border:'10px solid purple',
        position:'absolute',
        top:'145px',
        right:'-30px',
    }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberofGuesses: number
}

export function HangmanDrawing({numberofGuesses}: HangmanDrawingProps ) {
    return(
        <div style={{position:'relative'}}>
            {BODY_PARTS.slice(0, numberofGuesses)}
            
            <div style={{height:'50px', width:'10px', background:'black', position:'absolute', top:'0', right:'0'}}/>
            <div style={{height:'10px', width:'200px', background:'black', marginLeft:'120px'}}/>
            <div style={{height:'200px', width:'10px', background:'black', marginLeft:'120px'}}/>
            <div style={{ height:'10px', width:"250px", background:'black' }}></div>
        </div>
    )
}