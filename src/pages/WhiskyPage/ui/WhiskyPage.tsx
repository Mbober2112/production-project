import { Countries } from "entitiesModule/Country";
import { WhiskyType } from "entitiesModule/Whisky/model/types/whisky";
import { WhiskyList } from "entitiesModule/Whisky/ui/WhiskyList/WhiskyList";
import { useTranslation } from "react-i18next";
import cls from "./WhiskyPage.module.scss";

const WhiskyPage = () => {
  const { t } = useTranslation("whisky");

  return (
    <div>
      <WhiskyList
        whiskyList={[
          {
            id: "1",
            title: "Caol Ila 12 Years Old",
            description: "Some description",
            img: "https://amwine.ru/upload/resize_cache/iblock/496/620_620_1/496f76fa2a1ba6a5e1e4cd49d1b30733.jpg",
            bottler: "Distillery Bottling",
            distillery: "Caol Ila",
            statedAge: 12,
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 43,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
          {
            id: "2",
            title: "Glenallachie 12 Years Old",
            description: "Some description",
            img: "https://www.whisky.de/shop/out/pictures/generated/product/1/2200_2200_75/ximage_GALLA1202_D2_1.jpg,q1764245900.pagespeed.ic.dlMNtkHI0X.jpg",
            bottler: "Distillery Bottling",
            distillery: "Glenallachie",
            statedAge: 12,
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 46,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
          {
            id: "3",
            title: "Talisker 10 Years Old",
            description: "Some description",
            img: "https://s2.wine.style/images_gen/232/2327/0_0_991x600.webp",
            bottler: "Distillery Bottling",
            distillery: "Talisker",
            statedAge: 10,
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 45.8,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
          {
            id: "4",
            title: "Loch Lomond Single Malt 12 Years Old",
            description: "Some description",
            img: "https://static.decanter.ru/upload/images/409607/409607-viski-loch-lomond-single-malt-12-years-old-0-7-l-sq.jpg",
            bottler: "Distillery Bottling",
            distillery: "Loch Lomond",
            statedAge: 12,
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 46,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
          {
            id: "5",
            title: "Glen Scotia Double Cask Rum Cask Finish",
            description: "Some description",
            img: "https://www.lochlomondgroup.com/cdn/shop/products/double-cask-rum-finish-single-malt-whisky-742606_2048x.jpg?v=1706265303",
            bottler: "Distillery Bottling",
            distillery: "Glen Scotia",
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 46,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
          {
            id: "6",
            title: "Jura 10 Years Old",
            description: "Some description",
            img: "https://decanter.ru/image/367201-viski-jura-10-years-old-0-7-l-mb.jpg",
            bottler: "Distillery Bottling",
            distillery: "Isle of Jura",
            statedAge: 10,
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 40,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
          {
            id: "7",
            title: "Johnnie Walker Black Label",
            description: "Some description",
            img: "https://s2.wine.style/images_gen/230/2308/0_2_695x600.webp",
            bottler: "John Walker & Sons",
            statedAge: 12,
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 40,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
          {
            id: "8",
            title: "Teacher's Highland Cream",
            description: "Some description",
            img: "https://winestyleonline.com/images_gen/241/2418/0_0_orig.webp",
            bottler: "Wm. Teacher & Sons Ltd.",
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 40,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
          {
            id: "9",
            title: "Ballantines Finest",
            description: "Some description",
            img: "https://luding.ru/upload/iblock/d26/d26b8a9ecad156ccd74e395b6f009e40.png",
            bottler: "George Ballantine & Son",
            type: WhiskyType.SINGLE_MALT,
            country: Countries.SCOTLAND,
            alc: 40,
            createdAt: 123456654,
            updatedAt: 123456654,
          },
        ]}
      />
    </div>
  );
};

export default WhiskyPage;
