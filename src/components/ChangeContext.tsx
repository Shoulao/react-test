import { useContext, useEffect } from "react";
import Context from "../state/Context";
import { PageTitle } from "../components/common";
import styled from "@emotion/styled";

function ChangeContext() {
  const { coords, setCoords } = useContext(Context);

  useEffect(() => {
    console.log("New coords: ", coords);
  }, [coords]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCoords({ lat: e.target.lat.value, lng: e.target.lng.value });
  };

  return (
    <FormWrapper>
      <PageTitle>Change Context Form</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="lat">Latitude:</label>
          <input id="lat" type="text" name="lat" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="lng">Longitude:</label>
          <input id="lng" type="text" name="lng" />
        </InputWrapper>

        <button type="submit">Change</button>
      </Form>
    </FormWrapper>
  );
}

export default ChangeContext;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    padding: 10px;
    border: 1px solid #000;
    box-shadow: 2px 2px 0 0 #000;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    background-color: #90ee90;
    cursor: pointer;
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  label {
    font-weight: bold;
    text-align: center;
  }

  input {
    margin-top: 5px;
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;
