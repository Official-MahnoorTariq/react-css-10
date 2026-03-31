import Label from "./components/Label";
import Nav from "./components/Nav";
import Title from "./components/Title";

export default function App(){
  return(
    <>
    <div class="wrapper">
      <Label/>
       <nav id="sidebar">
        <Title/>
        <Nav/>
       </nav>
    </div>
    </>
  );
}