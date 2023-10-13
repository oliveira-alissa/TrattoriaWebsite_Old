import { MenuBtn } from "./MenuBtn";

export const Menus = () => {
  return (
    <section id="Menus" className="flex flex-col pt-16">
      <h1 className="self-center py-2 text-xl tracking-widest uppercase border-b-2 w-fit border-b-lightGrayTwo">
        Menus
      </h1>
      <div className="flex flex-col mx-auto sm:grid sm:gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
        <MenuBtn id="insalata">Insalata</MenuBtn>
        <MenuBtn id="antipasta">Antipasti</MenuBtn>
        <MenuBtn id="homemade-pasta">Homemade Pasta</MenuBtn>
        <MenuBtn id="classics">The Classics</MenuBtn>
        <MenuBtn id="pesce">Pesce</MenuBtn>
        <MenuBtn id="pollo">Pollo</MenuBtn>
        <MenuBtn id="carni">Carni</MenuBtn>
        <MenuBtn id="pizza">La Pizza</MenuBtn>
        <MenuBtn id="sides">Sides</MenuBtn>
        <MenuBtn id="desserts">Dessert</MenuBtn>
        <MenuBtn id="party">Party Menu</MenuBtn>
      </div>
    </section>
  );
};
