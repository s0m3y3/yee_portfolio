export default function Home() {
  return (
    <div style={{ position: 'relative', textAlign: 'left' }}>
      <img src="./background2.jpg" alt="missing image" className="img-fluid" />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <h1  style={{fontSize: '5vw'}} > Welcome </h1>
        <h2 style={{fontSize: '3vw',  margin: '0 10%'}}> "What we think, we become."—Buddha.</h2>
      </div>
    </div>
  );
}

