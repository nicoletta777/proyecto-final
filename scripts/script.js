const opciones = {
  hair: [
    "LINK_PELO_1",
    "LINK_PELO_2"
  ],
  outfit: [
    "LINK_OUTFIT_1",
    "LINK_OUTFIT_2"
  ],
  shoes: [
    "LINK_ZAPATOS_1",
    "LINK_ZAPATOS_2"
  ]
};

function cambiar(tipo, index) {
  document.getElementById(tipo).src = opciones[tipo][index];
}
