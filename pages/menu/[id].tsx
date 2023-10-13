import path from "path";
import fs from "fs/promises";

import { useRouter } from "next/router";

import { LeftArrowSVG } from "../../components/UI/LeftArrowSVG";

const MenuDetailsPage = ({
  data,
  title,
  party,
  appsArr,
  coursesArr,
  kidsArr,
}: any) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  let courseOne = [];
  let courseTwo = [];
  let courseThree = [];
  let courseFour = [];
  if (party) {
    courseOne.push(coursesArr.courses[0]);
    courseTwo.push(coursesArr.courses[1]);
    courseThree.push(coursesArr.courses.slice(2));
    courseFour.push(kidsArr.kids);
  }
  console.log(courseFour);

  return (
    <>
      <button className="flex items-center p-4 cursor-pointer" onClick={goBack}>
        <LeftArrowSVG />
        <p className="text-xs tracking-wide uppercase">Trattoria Al Cafone</p>
      </button>

      <section className="flex flex-col">
        <div className="self-center pt-8 pb-4 text-center border-b-2 border-red-800">
          <h1 className="text-4xl">Trattoria Il Cafone</h1>
          <h2 className="py-4 text-2xl">{title}</h2>
          {party && (
            <p className="text-xl">$35.95 per person - 3 Course Menu</p>
          )}
        </div>

        <div className="flex flex-col px-4 pt-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {!party &&
            data.map((item: any, idx: number) => (
              <div key={item.name} className="m-4">
                <h3 className="tracking-wide uppercase">{item.name}</h3>
                <p className="p-1 text-sm leading-6">{item.description}</p>
                <p className="pt-2">$ {item.price}</p>
              </div>
            ))}
        </div>
        <div className="flex flex-col pt-8">
          {party && (
            <div className="self-center">
              <p className="text-lg">
                Appetizers available for $12.95 extra per person
              </p>
            </div>
          )}
          <div className="flex flex-col px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {party &&
              appsArr.apps.map((item: any, idx: number) => (
                <div key={item.name} className="m-4">
                  <h3 className="tracking-wide uppercase">{item.name}</h3>
                  <p className="p-1 text-sm leading-6">{item.description}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-col">
            {party && (
              <div className="self-center">
                <p className="text-lg">First Course</p>
              </div>
            )}
            {party &&
              courseOne.map((item: any, idx: number) => (
                <div key={item.name} className="m-4">
                  <h3 className="tracking-wide uppercase">{item.name}</h3>
                  <p className="p-1 text-sm leading-6">{item.description}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-col">
            {party && (
              <div className="self-center">
                <p className="text-lg">Second Course</p>
              </div>
            )}
            {party &&
              courseTwo.map((item: any, idx: number) => (
                <div key={item.name} className="m-4">
                  <h3 className="tracking-wide uppercase">{item.name}</h3>
                  <p className="p-1 text-sm leading-6">{item.description}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-col">
            {party && (
              <div className="px-4 text-center">
                <p className="text-lg">
                  Main Courses - Choose three - All main dishes served with
                  potatoes and vegatables.
                </p>
              </div>
            )}
            <div className="flex flex-col px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {party &&
                courseThree[0].map((item: any, idx: number) => (
                  <div key={item.name} className="m-4">
                    <h3 className="tracking-wide uppercase">{item.name}</h3>
                    <p className="p-1 text-sm leading-6">{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col">
            {party && (
              <div className="px-4 text-center">
                <p className="text-lg">
                  Kids Party Menu - $17.95 per child under 13 y/o
                </p>
              </div>
            )}
            <div className="flex flex-col px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {party &&
                courseFour[0].map((item: any, idx: number) => (
                  <div key={item.name} className="m-4">
                    <h3 className="tracking-wide uppercase">{item.name}</h3>
                    <p className="p-1 text-sm leading-6">{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const paramsID = params.id;
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  const selectedData = data[0][paramsID];

  let title;
  switch (paramsID) {
    case "insalata":
      title = "Insalata";
      break;
    case "antipasta":
      title = "Antipasta";
      break;
    case "homemade-pasta":
      title = "Homemade Pasta";
      break;
    case "dry-pasta":
      title = "Dry Pasta";
      break;
    case "classics":
      title = "The Classics";
      break;
    case "pesce":
      title = "Pesce";
      break;
    case "pollo":
      title = "Pollo";
      break;
    case "carni":
      title = "Carni";
      break;
    case "pizza":
      title = "La Pizza";
      break;
    case "sides":
      title = "Sides";
      break;
    case "desserts":
      title = "Desserts";
      break;
    case "party":
      title = "Il Cafone Party Menu";
      break;
  }

  let party = false;
  let appsArr = false;
  let coursesArr = false;
  let kidsArr = false;
  if (paramsID === "party") {
    party = true;
    appsArr = selectedData[0];
    coursesArr = selectedData[1];
    kidsArr = selectedData[2];
  }

  return {
    props: {
      data: selectedData,
      title: title,
      party,
      appsArr,
      coursesArr,
      kidsArr,
    },
  };
}

export default MenuDetailsPage;
