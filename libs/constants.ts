import { IGalleryItem } from "@/components/gallery/types";

export const imgSrcReplaceReg = new RegExp(
  /src=[\\"\']?([^>\\"\']+)[\\"\']?[^>]*>/g,
);

export const THEME_META_IMAGE =
  'https://res.cloudinary.com/dolziw8fv/image/upload/v1674413434/DALL_E_2023-01-23_03.46.28_-_a_sceintific_photo_of_the_most_nostalgic_sundog_during_sunset_on_ocean_provia_400_rillrw.png"';
export const THEME_LOGO_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1663058798/logo_ktizgo.jpg";
export const DEFAULT_REACT_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1661838248/handinthesky_by7xjb.jpg";
export const DEFAULT_NEXT_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1661669755/zlc6jlp1p6ilr8rhzvi5.png";
export const DEFAULT_TS_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1661840879/typescript_preset_ioudd0.png";
export const DEFAULT_JS_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1662480649/javascript_preset_f07j3f.png";
export const DEFAULT_ETC_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1661838134/component_pji40f.png";
export const DEFAULT_RECAP_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975868/recap-preset_ssksj1.png";
export const DEFAULT_ERROR_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975868/error-preset_s0chxc.png";
export const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1674554187/rkvskmgscq88ku3kzfks.png";
export const DEFAULT_SKY =
  "https://res.cloudinary.com/dolziw8fv/image/upload/v1674554187/rkvskmgscq88ku3kzfks.png";

export const SQUARE_BASE_64_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAC8CAYAAADCScSrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA84SURBVHgB7Z1NblS9EoZ9OoGPENAVCISEEEFCYkJmbCAsgGHYTrrXw5ANZAPMYMIAMUUhoCsUOiTd7evX8WvK7tPcb1y8jxT6/Prv+BR1yuXyEGMcguHjx49HQQgnPHv2bJZ+4jAMAX19kjZiEMIps9kMAn2gYJ9gBxuvX79G598OQjji7du3W6lfD+j4kPKT1PPziU+fPk0ePXqkDi9c8eXLl+0XL15sTadTqDRhG70+XEn6rfR3PQjhiLOzs+unp6fx8PBwlXYjOno8ODgYHj58OLl9+/a1IIQjFovF9sXFxeTk5AQqTYRKM/z48WO4vLycrFarrSCEI1Lf3l4ul1mNyVYabLx79y5iJ4n/IQjhiJs3b0KQZ6GOfVhmQlLqh3JSHV64I6kzEOqhsdKAnz9/yiYv3HH//n0I9WylySpN+ljNHX13dzcI4Q1IePbxrNJAv/n69Wvo3QyE8MLx8XE78HTv3r0ghDegpkOlIZMy8MSTQQhP0BADHR5kCU/9Jp0MQngCEh6qOqw0IH+00kYpCS8ckr9PDw4OYrXSEEl44Q326TrwZE/KN154A1pL+miNVaXhR6vMksIjaWwpwg7ffLQCmCUl4YU3ihCvgrwZaRXCGxDidoyp6vBQaYTwRq+m1w6Pt+Ds7CwI4QlIeKuq5w4PPwP8yj1YeAMS3kr5xrVACG9wMLWaJa0/vBDegFkSKg1GWrGfVRraKGWWFN7oP1oZpiOPRmngSXiluhZApYGERxgDOY8Jj1hBXiONwSypDi88ksaYIsaZ8oynIIRjIMSTMG9dC4g+WoU36B7MqAVVpZFrgfAIhXgz44koTIfwBj9Yq3sw/kGoPfnSCM80Ej6NQvG47PDCFfhohbpuJXw8Pj4OQnimxpZEOCYEU4VyD7+DIIQj2KfXpvjJrUB4BCHg4TaD7SaYKiS8Or3wBuzwa/7wcKyBL00Qwhnlo7Wq6tsQ8/SYlC+N8AZ0+J2dnVbCwzkednhFHhPegDrTzGmFhDexJWWlEe6gDk+zZD0h1wLhFdjh5Twm/gaqLw3Xac1Hiw4vS43wBiZ/xCLhh8ZbUlYa4ZQaXzKrNFoBRHgG2sve3l7u44xakIdfJeGFR9ZC7UGhXy6XE0l44ZEmakEZacXAU9ScVuGZNTu8EF6hHZ6BmNTrhUvGZjzlOa341ZxW4RH6wyciP1oVH164BIYYuL5DpZnNZhNK+CCEV2CHh0pzdHS0mqReP1C/kbek8Ah0+DqJezqd1kVb5S0pvFFiSzLU3sC4NJLswiWY8WSn+NUJIDioSdzCG4hagOjB9BezA0/q7MIddJfhSpV1Ejf0HE0CER5pBp7Q2bGDg4o8JrzRewA3dnjp8MIbvQdwXdRMCK8Y14LfCyJAhxfCM417cFnlTDq8cMfJyUmexlqDqUKHLyuASIcX7kgqTQ021sSlkZVGeANWGvxBytd1WvHRKgkvPFKE+MBlK5sJIAlJeOGKYmqP1lsyB6kpKk0QwhtciTtL+KOjo0iVRgNPwiNrc1rpSSazpPBGcS2gShPrkjdyHBNegUqDOR/QYGwgJrwNUmmEKxiYoNrhMac1lI9WIRyCGU/V9T1/tHKNJw08CY9wTmsdeKIOr4En4RH0bfrSZNcC+tLM53NJeOEKWmnqFD97UhJeeARWmr29vbxNf3itACL+CjinVVYa4RIIcdu38xQ/jbQKz6xN8UsKvXxphEusELf+8OrowiUQ4gyXDarzmHR44RWoNE0gJvoZSIcXHoGUb9Z4goSXDi88wwjZdWHiclwSXrgCI60cX0Jfb9yD5/N5EMIT7OxQ2+skbg48SaUR3mAw1WKliTXyWJkAEoTwBCS8McYM+aPVIB1euAOaS/WHt0vPK0yH8EoxS8bmo1UIb6Bvc1A1bQ+Na4H84YVHIMxL1IJqh1d8eOESCPH0F2GWzDo8VwApYl8frcIdmPGE+KnVDl8O1hgeQngCejzV9sZKIzu88Abs8HAP5n61w2tBBOGYuOYPL29J4Z0mEBP0HPnDC49gjadilow1Lg2kuyS88EZZ42koQn3oP1ol4YVbaqg9hukIvyeCCOECWGnwR/dg+tIMNnaHEF7gjKcmejB2YKtUqD3hDfbp4i05NCOtQniDg6mU8DVcNpCEFw6Be3B1EWYwVUl44RL4h8F5rK7E3U3xE8IVUGnsgGrV4RVqT3ikV9OzSmPs8EK4w3oQVDu8wnQIjxTXgrC/v5+FelZpGHdPCG+Uj9YaMJgLIsilQHilCQUPHX5g7GypNMIjNLlzEnfkggia8SQ8UydxU78Rwhuc2FSn+Nm4NGdnZ0EITzC4WPGlic1Iq8J0CG8wagG9JesUP420Co/AEAPtpS49z5HWEogpCOEJrsSNyGPYb0ZaFbVAeAN9GrP5Hj9+nCNz1BlPQNGDhTfYp5sZTxT3UmmEN9CnmxVAcJCBJhWmQ3iEqnoTPRiKvcySwiONezD+gUoj92DhkbLkTXadWVNphPCGHWmtKg0/WoXwho1LAxoJLzu88AbUdEQPpul9Yk/KeUx4Y03C20ncstII72RvSfrDy0ojvIE+DW9JqjRNuGyNtApvYBbfzs4Od69WAOEkbk3xE96AWRIdvgj1YTKbzaq415I3whvUWmqYjqOjo6iRVuEZTm5qRlqLL00QwhOc8VTcg0NWaexJITwBIY4BVUTXyxNAptOp/VDVR6twB75NYZjJk7gRiAm6TdHh9dEq3AF1vU4AYag9HJRKI5zSTgChn4Hs8MIb0Nux5A33s2sB13iS85jwSBNqD/9gFEquwcIj+ETlJG7sosNHjELBwSZo6XnhjDLF77drAT5aFXlMeIVT/OhaoDWehGsgxGGMgQ5vXQuCFkQQHoFKU9R16PNXOjx2tBK38Ag+WE3fvtLh81Z6E2SWFB5pRlrTfnYPLr7wstIIdxhvyew8NlEgJuEZRB4rEn7IE0B4MAjhELgWFDt8rJO4cXA+n6vTC3dAh4cdvsaHh6+wXAuER7gCCLdzICbMBoGtUlYa4Q360pyfnw91FT+Ie00AER6B9wD++I3arNMqhDfgWgBh3kQeAyWUgXq/cAW/TelLY0PtRQVTFd6At2T5NsW4U9gungVBZknhEcaW3N/fz/vVPRg7stIIbxQJH2l61yp+wjWQ8NBeyhpPVwNPsMPLPVj8DeQODzu84tIIj0CqM5gqdifmozUfCEI4A64FDNPBj9bc4ZO+E4TwxsnJSZ0AwoGnaMS+EN6gMSZP8avrtMpKI7zB+PCgWYkbB+UiLLxhYy3lOa3o9cksmQ9ojSfhESPIr6w0jMokhDe4Tiv3q0ojdUY4hn17qIua4S1Ib4M6vXAH48NnE3z6HZIOv/X+/fud+Xy+u1gs/rNarW5dXl7eSOe2tre3h3Ss3pz2A/bxC+y2AfdEXs9jyJPXd7/5HK+xCTHvdE0s6TJNm169ryvPaHpIK/0OXblzme2xkXrymrVrbVlNW+V8unZo0jb129SW/+a+obTPaHpjz8vWx5QP2xPWMbRth/1V+W3y6drP3sdnlH/HntNYnfmMyv2bnmHo+kIw16VTi3n6hTfkf8vveerwiyYneJX9888/qNTy2rVri9Tp1xrTPtS+Icca2p7j+bHfPo0Raif7U8cYedC1c9vymAc89GXjeZuWLW//kvX5F3LaY/Urx+PIC9LXda2D2GvS9op59GW27RbWhUHtiCMvynJMSI3Us2m7sWtMnvXF6q8de46b2riUN9fZtmVonwPKu0j9dzWZTFAXRNRbwV8spw0x//Lly3D9+vXl7du3F+kD9jId/5VuiOlvG52e7sM4hv2QP3wHnG/eZnM+F4776XescP1byeuGdE/kPcijlIESnjPQa55Mj/fhz+Zb0mCauQxdudYajuU3aeUMkY7JP7C+TJvl7Otp62TO1w5T0qvl6q/t2jrYuoSuY9p6l996Tf8ssWvboquPrXv/cte82Sash20vUxbWbzB1q/W1+XKbbWzL1XV05he7NJbp+K/EIvXrxYMHD2o6mAASDw8P4+fPn1fpbUBq5yhIejsW6YZJkvj5wrSdK4j9tJ0TT4kNFxcX+ZjdzjUpJs60XxYKHPIvr0Ea9lp+NJf7ckPgfL9fyhJS+Zr7Sl4273yS51m+8tuUi/XDMabDPOy+zcPCY2Pnyn1DadO1+9gO+EXZWAbud+2SX3w+C5znMVt31rNcW9Ox5WMboUz98+jr2z8fPkse658LQMdmXfprbT9g2fhc0IHTNuvJsjRpmXZgfkP6jaa9lunc5e7u7q+tra3lzs7OkqE68v8nb968gchfwEn+zp074fv374vU+c/xXwoygGkHfsXMjMZ8HOfCr3C0xzaP0fPSbtt7zfFY9tdUC7uPD2oeT5WwAWCbMtlyEfuyoVGZly0r68E6or592rwG26zvH+oc4ZvUl5XXMTQ5zvM+SF1MwkH5bHn6+thnYevM47b9+nKNtGs9nsrS1Me2nSlLrlff8fG7qYy27thFGrYdeF2pf6072ga/KCev6ftS/wzL+VXSVpZFW7l4+vTp8vnz51WlyQnNZrNVumBxenoaU4e/vHXr1rBcLif0sUmJRWvP7FcMKQ+qZsxzuN/62qcP4uHbt29NiO6xZe/7+zalh+lbbFSUD28ywo3g+k1p2H2Uhw+A6bNsSJtu00jXdjLmWx5CztPWp78G5Uv79aExbduOtry2HGMrs9jzgC8Q3WHH0unb1l63qX15jBISL+PY/awjX1DWD0WClaSv71g+gP2or8Pdu3ezFLcd/saNG3jOkW3a9bvlkydPVklzWb569Wo5nU5X6e+3DomCYhn6JOUn6S+PvkLipzdjSAlvNFdiArgduIJNn7453IZrJj4akF4oeh/DJuCalMcEefA6pmfTsvlwG9cjHbp+cptpM40w8r1Qrmc+TflKmWvZ0Qbpga/6/LGNAD8fPnxY4VoeH2mTpl4WW3Z7rK9LX3+UdaytmF53rh7jfXjGfA42H5YV230bmzbKbckRentdT98W5tnl58K8xtLFMft87bXluO1rwR5DPnhJIdkRP3VtnIkRmlCIsh3K39D/98ljJqZNf+8wkt7GP3u/zT/8NkvVMmwo58Y8eU93bDTPrm6j7cB7EHW5u2atLv+ibGvl/FMZR9pjNI//l/9IGs0z7uvVP5Ox8vfPbKQtbB6bnvkw1qab2mhTHjYf9lEe/x+6ZVuUCTh2+wAAAABJRU5ErkJggg==\n";

const GALLERY_2022_IMAGES: IGalleryItem[] = [
  {
    id: 2014.1,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975838/gallery/v1/gallery-v1--56_b1qhqt.jpg",
    title: "",
    createdAt: "2014",
    content: "",
  },
  {
    id: 2018.1,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975837/gallery/v1/gallery-v1--48_ylniyt.jpg",
    title: "",
    createdAt: "2018",
    content: "",
  },
  {
    id: 2018.2,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975836/gallery/v1/gallery-v1--42_alerpg.jpg",
    title: "",
    createdAt: "2018",
    content: "",
  },
  {
    id: 2022.1,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1662479712/gallery/v1/gallery-v1--58_pafn9u.jpg",
    title: "",
    createdAt: "2022",
    content: "",
  },
  {
    id: 2021.1,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975838/gallery/v1/gallery-v1--53_q4b9hr.jpg",
    title: "unfold",
    createdAt: "2021",
    content: "",
  },
  {
    id: 2018.3,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975837/gallery/v1/gallery-v1--44_vd2be7.jpg",
    title: "",
    createdAt: "2018",
    content: "",
  },
  {
    id: 2018.4,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975836/gallery/v1/gallery-v1--45_zihs6p.jpg",
    title: "Iguazu",
    createdAt: "2018",
    content: "",
  },
  {
    id: 2018.5,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1662050042/gallery-v1--31_ud9i4l.jpg",
    title: "",
    createdAt: "2018",
    content: "",
  },
  {
    id: 2018.6,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975836/gallery/v1/gallery-v1--41_efzhkx.jpg",
    title: "",
    createdAt: "2018",
    content: "",
  },
  {
    id: 2016.1,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975835/gallery/v1/gallery-v1--34_nlztmy.jpg",
    title: "curves",
    createdAt: "2016",
    content: "",
  },
  {
    id: 2018.7,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975835/gallery/v1/gallery-v1--37_mahgnu.jpg",
    title: "",
    createdAt: "2018",
    content: "",
  },
  {
    id: 2016.2,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975835/gallery/v1/gallery-v1--29_gmgn79.jpg",
    title: "",
    createdAt: "2016",
    content: "",
  },
  {
    id: 2019.1,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975836/gallery/v1/gallery-v1--46_opobxq.jpg",
    title: "",
    createdAt: "2019",
    content: "",
  },
  {
    id: 2021.2,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975838/gallery/v1/gallery-v1--52_qrvivh.jpg",
    title: "",
    createdAt: "2021",
    content: "",
  },
  {
    id: 2018.8,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1662050056/preset-pic-8_lwrnoh.jpg",
    title: "",
    createdAt: "2018",
    content: "",
  },
  {
    id: 2021.3,
    imgUrl:
      "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975837/gallery/v1/gallery-v1--51_zm5vox.jpg",
    title: "",
    createdAt: "2021",
    content: "",
  },
];
export { GALLERY_2022_IMAGES };
