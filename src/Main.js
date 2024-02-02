import { Route, Router, Routes } from "react-router-dom";
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
import ExerciceRoute from "./pages/ExerciceRoute";
import RouterDom from "./pages/RouterDom";
import NestedRoute from "./pages/NestedRoute";
import NotFound from "./pages/NotFound";
import HookMemo from "./pages/HookMemo";
import HookCallback from "./pages/HookCallback";
import Users from "./pages/Users";
import Redux from "./pages/Redux";
import Products from "./pages/Products";

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
            <Route path="local-state" element={<LocalState />} />
            <Route path="composition" element={<Composition />} />
            <Route path="life-cycle" element={<LifeCycle />} />
            <Route path="formulaire" element={<Formulaire />} />
            <Route path="reducer" element={<Reducer />} />
            <Route path="router/*" element={<RouterDom />} /> 
            <Route path="router/nested" element={<NestedRoute />}>
                <Route path="etape-1" element={<h4>Etape 1</h4>} />
                <Route path="etape-2" element={<h4>Etape 2</h4>} />
                <Route path="etape-3" element={<h4>Etape 3</h4>} />
            </Route>

            <Route path="exercice">
                <Route index element={<NotFound />} />
                <Route path="video" element={<ExerciceVideo />} />
                <Route path="hooks" element={<ExerciceHooks />} />
                <Route path="todolist" element={<ExerciceTodoList />} />
                <Route path="user/:id" element={<ExerciceRoute />} />
            </Route>

            <Route path="memo" element={<HookMemo />} />
            <Route path="callback" element={<HookCallback />} />
            <Route path="users" element={<Users />} />
            <Route path="redux" element={<Redux />} />
            <Route path="products" element={<Products />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}