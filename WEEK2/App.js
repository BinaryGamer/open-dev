import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function RecipeSelector({name, targetIndex, index, setIndex}) {
  const onClickEvent = (event) => {
    setIndex(targetIndex);
  }
  if (index === targetIndex) {
    return <div className="item selectedItem" onClick={onClickEvent}>{name}</div>;
  }
  return <div className="item" onClick={onClickEvent}>{name}</div>;
}

function Recipe({value}) {
  const recipes = [<div className="content">
  <h3> function <b> cook_beef_burger </b> (ingredients: Food[]): Burger </h3>
    <ul>
      <li> <b>mix</b> (ground_beef, minced_onion, garlic_powder, salt, black_pepper) </li>
      <li> <b>shape_into_patties</b> () </li>
      <li> <b>grill_or_pan_fry_patties</b>() </li>
      <li> <b>toast_burger_buns</b>() </li>
      <li> <b>assemble_burger</b>() </li>
    </ul>
</div>,
<div className="content">
      <h3> function <b> cook_veggie_quinoa_burger</b> (ingredients: Food[]): Burger </h3>
      <ul>
        <li> <b>mix</b> (quinoa, mashed_black_beans, diced_bell_peppers, chopped_onions, breadcrumbs, spices) </li>
        <li> <b>shape_into_patties</b> () </li>
        <li> <b>pan_fry_or_bake_patties</b>() </li>
        <li> <b>toast_burger_buns</b>() </li>
        <li> <b>assemble_burger</b>() </li>
      </ul>
    </div>,
    <div className="content">
    <h3> function <b> cook_grilled_chicken_teriyaki_burger </b> (ingredients: Food[]): Burger </h3>
    <ul>
      <li> <b>marinate_chicken</b>()</li>
      <li> <b>grill</b> (chicken)</li>
      <li> <b>toast</b> (burger_buns) </li>
      <li> <b>prepare_spicy_mayo</b>() </li>
      <li> <b>assemble_burger</b>() </li>
    </ul>
  </div>];
  console.log(recipes[value]);
  return recipes[value];
}

function RecipeBook() {
  const [currentRec, setRec] = useState(0);

  return <>
    <RecipeSelector name="Classic Beef Burger" targetIndex={0} index={currentRec} setIndex={setRec} />
    <RecipeSelector name="Veggie Quinoa Burger" targetIndex={1} index={currentRec} setIndex={setRec} />
    <RecipeSelector name="Grilled Chicken Teriyaki Burger" targetIndex={2} index={currentRec} setIndex={setRec} />
    <Recipe value={currentRec} />
    </>;
}

function App() {
  return <RecipeBook />;
}

export default App;
