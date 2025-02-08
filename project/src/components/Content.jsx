

const Content = () => {
  return (
    <div className="main_cont">

        <div className="header">
            <p>CODE</p>
            <p className="jumanji">JUMANJI</p>
            
            
        </div>

        <div className="main_cont2">
            <div className="main_cont2_header">
                <p> <span>JUNGLE </span> <span>LAWS</span></p>
            </div>
            <div className="rules">
                <p>TIME : 40 MINUTE LIMIT , NO EXTRA TIME , SUBMISSION CLOSE AUTOMATICALLY</p>
                <p>LOCATION : FIND 3 HIDDEN QR CODES BY SOLVING RIDDLES , NO RANDOM SCANNING OR TAMPERING. FOLLOWING OTHER TEAMS RESULTS IN A PENALTY</p>
                <p>CONNECTIVITY : PARTICIPANTS ARE RESPONSIBLE FOR THERE OWN INTERNET CONNECTIVITY EVENT ORGANISERS ARE NOT LIABLE FOR NETWORK ISSUES</p>
                <p>SCORING :
                 <p> CORRECT SCAN : +10 POINTS </p>
                 <p>WITHIN 10 MIN: +5 BONUS </p>
                 <p>WRONG SCAN : -3 POINTS</p>
                </p>

                <p>WINNING : HIGHEST SCORE WINS. TIES ARE BROKEN BY FINISH TIME; IF STILL TIED , A FINAL RIDDLE DECIDES</p>
                
            </div>

        </div>
        
        <div className="start_quest">
                <button>START QUEST</button>
            </div>

      
    </div>
  )
}

export default Content
