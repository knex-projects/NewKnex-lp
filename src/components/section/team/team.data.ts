export type TeamMember = Readonly<{
  id: string;
  name: string;
  role: string;
  image: string;
}>;

const getDriveImage = (id: string) =>
  `https://drive.google.com/uc?export=view&id=${id}`;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "geraldez-ribeiro",
    name: "Geraldez Ribeiro",
    role: "Diretor de UI/UX",
    image: getDriveImage("17Iej87kV5C_We6-FrTXQrG0siS-x-8ut"),
  },
  {
    id: "jennifer-germano",
    name: "Jennifer Germano",
    role: "UI/UX Designer",
    image: getDriveImage("1Zs9q275apl0B42SqrJ0EWXlhqfWWPdcQ"),
  },
  {
    id: "ramiundo-nobrega",
    name: "Raimundo Nóbrega",
    role: "UI/UX Designer",
    image: getDriveImage("1Yfrz3Bt7aCiPDR49oXhO4aaj4kGv15zm"),
  },
  {
    id: "carlos-henrique",
    name: "Carlos Henrique",
    role: "Desenvolvedor Front-End &\nUI/UX Designer",
    image: getDriveImage("1eTVrz9Fx-ObDqhHUPFBvlJpvNv-5H5T7"),
  },
  {
    id: "arthur-nicolas",
    name: "Arthur Nicolas",
    role: "Diretor de Projetos",
    image: getDriveImage("1dEIZEBpNI7QsLqk74bYZHJdvE0LTGAPS"),
  },
  {
    id: "roseane-nunes",
    name: "Roseane Nunes",
    role: "Acessora de Projetos",
    image: getDriveImage("1DtwxIVZI49xxTAIIiBKtlQ4gIaBLA6IJ"),
  },
  {
    id: "carlos-eduardo",
    name: "Carlos Eduardo",
    role: "Desenvolvedor Front-End",
    image: getDriveImage("165EWD3zakSavEInDMk-zi7lfUrAgHxDO"),
  },
  {
    id: "alessandro-vieira",
    name: "Alessandro Vieira",
    role: "Desenvolvedor Front-End",
    image: getDriveImage("1I9TrPsp1me63AMfI7oEMNOEOBaneaPR6"),
  },
  {
    id: "hercules-da-costa",
    name: "Hercules da Costa",
    role: "Desenvolvedor Front-End",
    image: getDriveImage("1kaNHoFcmlVsP6vdfzTzCWD3JpCHUll2p"),
  },
  {
    id: "francisco-felipe",
    name: "Francisco Felipe",
    role: "Desenvolvedor Front-End",
    image: getDriveImage("1wP10l3_mhuJnEzmmaa27wuEYvicY1PUl"),
  },
  {
    id: "pedro-henrique",
    name: "Pedro Henrique",
    role: "Desenvolvedor Back-End",
    image: getDriveImage("1MLLytscOL2CrNV5MC8Qo6UPuqKkJmSWy"),
  },
  {
    id: "pablo-porcino",
    name: "Pablo Porcino",
    role: "Desenvolvedor Back-End",
    image: getDriveImage("1bUA95oiDHO3X7qNVeGS271dXUpSi78rZ"),
  },
  {
    id: "nicolas-pereira",
    name: "Nicolas Pereira",
    role: "Desenvolvedor Back-End",
    image: getDriveImage("1YtS9XPZzmQfpfTwMj9bPwh7zMPfj_dAs"),
  },
  {
    id: "marcos-ruan",
    name: "Marcos Ruan",
    role: "Desenvolvedor Back-End",
    image: getDriveImage("1xSxf6bMahrieRlA6CqT5XTPtJSZ-tCdl"),
  },
  {
    id: "alyson-diego",
    name: "Alyson Diego",
    role: "Desenvolvedor Back-End",
    image: getDriveImage("179hOdF6pB4xVA_y6ZIAKxdcrycXfWuw2"),
  },
  {
    id: "gian-lucas",
    name: "Gian Lucas",
    role: "Desenvolvedor Back-End",
    image: getDriveImage("1mSybuTv_2iHtxP_cEJB5BLZ2zDvhwe-q"),
  },
  {
    id: "isaque-batista",
    name: "Isaque Batista",
    role: "Desenvolvedor Back-End",
    image: getDriveImage("11BujvRl-lzU-l3k6W3Y4BI1UryBytTS5"),
  },
  {
    id: "thulio-bezerra",
    name: "Thulio Bezerra",
    role: "Presidente",
    image: getDriveImage("1ZroH9aRkiGgIsXlpeqE1R7mcU6AcT9B9"),
  },
  {
    id: "monick-evelyn",
    name: "Monick Évelyn",
    role: "Vice-Presidente",
    image: getDriveImage("17nyoGlrFLI9AXoZtxv-3Xruk5F5y6iJa"),
  },
  {
    id: "jose-guilherme",
    name: "José Guilherme",
    role: "Diretor de Recursos Humanos",
    image: getDriveImage("1WqG88UL-foe-lNqBMRRL9UPFs01WSd0T"),
  },
  {
    id: "anaely-neves",
    name: "Anaely Neves",
    role: "Acessora de Recursos Humanos",
    image: getDriveImage("1181xpmq-bX_dq8_x_ipBHA3tBh3Yp-BY"),
  },
  {
    id: "vinicius-vieira",
    name: "Vinícius Vieira",
    role: "Diretor Financeiro",
    image: getDriveImage("1gZj2MfNrY9PinY9ZViaiw9EfvfhMgkEE"),
  },
  {
    id: "nathielly-pinheiro",
    name: "Nathielly Pinheiro",
    role: "Diretora Comercial",
    image: getDriveImage("12p5gSwAUrKYJs3tGmYs4ugUm9jyfP0yf"),
  },
  {
    id: "daiane-lima",
    name: "Daiane Lima",
    role: "Acessora Comercial",
    image: getDriveImage("15l_v42Cdm9hgb5qhI-plQd6-tSrI24DN"),
  },
  {
    id: "isaac-silva",
    name: "Isaac Silva",
    role: "Acessor Comercial",
    image: getDriveImage("1FTzMt3lwaz9T1hQKYzhCoSDKHNTFO3-W"),
  },
  {
    id: "vitoria-nunes",
    name: "Vitória Nunes",
    role: "Diretoria de Marketing",
    image: getDriveImage("1ZBedtjyrjCsnBvAaVHit9a9yQ-xPJi3c"),
  },
  {
    id: "beatriz-alves",
    name: "Beatriz Alves",
    role: "Assessora de Marketing",
    image: getDriveImage("11D52pTu4_BNh4S6o-gQP9B9YZA0fpzAU"),
  },
  {
    id: "clarissa-souza",
    name: "Clarissa Souza",
    role: "Assessora de Marketing",
    image: getDriveImage("1Om4AqW5I1cxdJQxni9DixqxWO9fzQ8Ka"),
  },
  {
    id: "lais-brilhante",
    name: "Laís Brilhante",
    role: "Assessora de Marketing",
    image: getDriveImage("1XBKe788D0LsuF9a8oUVvYnUMDWBwMYKe"),
  },
];