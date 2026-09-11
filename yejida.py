# yejida.py
# Modelo computacional de los cinco niveles del alma según la Kabaláh.
# Autor: (puedes poner tu nombre)
# Ejecutar: python yejida.py

from dataclasses import dataclass, asdict
from typing import List
import json


@dataclass(frozen=True)
class NivelAlma:
    nivel: int
    nombre: str
    hebreo: str
    significado: str
    funcion: str
    sefira: str
    mundo: str
    letra_yhvh: str
    descripcion: str


NIVELES: List[NivelAlma] = [
    NivelAlma(
        nivel=1,
        nombre="Nefesh",
        hebreo="נפש",
        significado="Alma / Vitalidad",
        funcion="Facultades naturales y físicas",
        sefira="Maljut (Reino)",
        mundo="Asiá",
        letra_yhvh="Hei final (ה)",
        descripcion="Vitalidad biológica, motor de la vida física."
    ),
    NivelAlma(
        nivel=2,
        nombre="Ruaj",
        hebreo="רוח",
        significado="Espíritu / Viento",
        funcion="Facultades emocionales y sentimientos",
        sefira="Jesed a Yesod (6 Sefirot)",
        mundo="Yetzirá",
        letra_yhvh="Vav (ו)",
        descripcion="Purificación emocional."
    ),
    NivelAlma(
        nivel=3,
        nombre="Neshamá",
        hebreo="נשמה",
        significado="Aliento / Alma",
        funcion="Facultades mentales e intelectuales",
        sefira="Biná (Entendimiento)",
        mundo="Briá",
        letra_yhvh="Hei (ה)",
        descripcion="Estudio y comprensión de la Torá."
    ),
    NivelAlma(
        nivel=4,
        nombre="Jaiá",
        hebreo="חיה",
        significado="Vida",
        funcion="Facultades supra-racionales",
        sefira="Jojmá (Sabiduría)",
        mundo="Atzilut",
        letra_yhvh="Yud (י)",
        descripcion="Voluntad, deseo y fe supra-racional. 'Cerebros de Jayá' como antesala profética."
    ),
    NivelAlma(
        nivel=5,
        nombre="Yejidá",
        hebreo="יחידה",
        significado="Unicidad / Singularidad",
        funcion="Unidad absoluta con Dios",
        sefira="Kéter (Corona)",
        mundo="Adam Kadmon",
        letra_yhvh="Ápice del Yud (קוצו של יוד)",
        descripcion="Chispa divina permanentemente unida a Dios. Se revela cuando los otros niveles se aquietan."
    ),
]


def tabla_niveles() -> str:
    lineas = []
    lineas.append("╔" + "═" * 78 + "╗")
    lineas.append("║" + " LOS CINCO NIVELES DEL ALMA ".center(78) + "║")
    lineas.append("╚" + "═" * 78 + "╝")

    for n in NIVELES:
        lineas.append(f"{n.nivel}. {n.nombre} ({n.hebreo}) — {n.significado}")
        lineas.append(f"   Función: {n.funcion}")
        lineas.append(f"   Sefirá: {n.sefira} | Mundo: {n.mundo} | YHVH: {n.letra_yhvh}")
        lineas.append(f"   {n.descripcion}")
        lineas.append("")

    return "\n".join(lineas)


def ecuacion_yejida() -> str:
    return (
        "YEJIDÁ = KÉTER = ÁPICE DEL YUD = FUENTE DE LUZ INFINITA\n"
        "יחידה  = כתר   = קוצו של יוד    = מקור האור אין סוף"
    )


def diagrama_yhvh() -> str:
    return r"""
        ✦  ÁPICE DEL YUD  (קוצו של יוד)  →  YEJIDÁ / KÉTER
        │
    ╔═══▼═══╗
    ║   י   ║  YUD  →  Jaiá / Jojmá / Sabiduría
    ╚═══╤═══╝
    ╔═══▼═══╗
    ║   ה   ║  HEI  →  Neshamá / Biná / Entendimiento
    ╚═══╤═══╝
    ╔═══▼═══╗
    ║   ו   ║  VAV  →  Ruaj / 6 Sefirot / Emociones
    ╚═══╤═══╝
    ╔═══▼═══╗
    ║   ה   ║  HEI FINAL  →  Nefesh / Maljut / Acción
    ╚═══════╝
"""


class Alma:
    def __init__(self):
        self.niveles = NIVELES
        self.nivel_actual = 1

    def elevar(self, nivel: int) -> str:
        if nivel < 1 or nivel > 5:
            raise ValueError("El nivel debe estar entre 1 y 5.")
        self.nivel_actual = nivel
        return f"Elevándose a {NIVELES[nivel - 1].nombre} ({NIVELES[nivel - 1].hebreo})"

    def meditar(self) -> str:
        return (
            "Aquietando Nefesh, Ruaj y Neshamá...\n"
            "Jayá se abre como antesala.\n"
            "Yejidá se revela: 'Hashem es todo, y todo es Hashem'."
        )

    def profetizar(self) -> str:
        return "Revelación de unidad: la parte contiene el todo."

    def exportar_json(self) -> str:
        return json.dumps([asdict(n) for n in self.niveles], ensure_ascii=False, indent=2)


if __name__ == "__main__":
    print(tabla_niveles())
    print("ECUACIÓN:")
    print(ecuacion_yejida())
    print("DIAGRAMA YHVH:")
    print(diagrama_yhvh())

    alma = Alma()
    print(alma.elevar(4))
    print(alma.meditar())
    print(alma.profetizar())

    # Si quieres exportar a JSON, descomenta:
    # print(alma.exportar_json())