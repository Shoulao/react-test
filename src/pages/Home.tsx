import { useContext, useEffect } from "react";
import Context from "../state/Context";
import { Container } from "../components/common";

function Home() {
  const { coords } = useContext(Context);

  useEffect(() => {
    console.log(coords);
  });

  return (
    <Container>
      <div>
        <p>
          <span>lng: </span>
          {coords.lng}
        </p>
      </div>

      <div>
        <p>
          <span>lat: </span>
          {coords.lat}
        </p>
      </div>
    </Container>
  );
}

export default Home;
