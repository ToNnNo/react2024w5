import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Presentation from './pages/Presentation';
import Condition from "./pages/Condition";
import Iterator from "./pages/Iterator";
import Event from "./pages/Event";
import Fragment from "./pages/Fragment";
import StyleAsset from "./pages/StyleAsset/StyleAsset";
import ExerciceVideo from "./pages/ExerciceVideo";
import LocalState from "./pages/LocalState";
import Composition from "./pages/Composition";
import LifeCycle from "./pages/LifeCycle";
import ExerciceHooks from "./pages/ExerciceHooks";
import Formulaire from "./pages/Formulaire";
import Reducer from "./pages/Reducer";
import ExerciceTodoList from "./pages/ExerciceTodoList";

export default function Main() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="presentation" element={<Presentation />} />
            <Route path="conditions" element={<Condition />} />
            <Route path="iterator" element={<Iterator />} />
            <Route path="event" element={<Event />} />
            <Route path="fragment" element={<Fragment />} />
            <Route path="style-asset" element={<StyleAsset />} />
            <Route path="exercice-video" element={<ExerciceVideo />} />
            <Route path="local-state" element={<LocalState />} />
            <Route path="composition" element={<Composition />} />
            <Route path="life-cycle" element={<LifeCycle />} />
            <Route path="exercice-hooks" element={<ExerciceHooks />} />
            <Route path="formulaire" element={<Formulaire />} />
            <Route path="reducer" element={<Reducer />} />
            <Route path="exercice-todolist" element={<ExerciceTodoList />} />
        </Routes>
    )
}