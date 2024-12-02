import printing from './assets/3dprinting.webp'
import ats from './assets/ats.webp'
import boardgame from './assets/boardgame.webp'
import brosignal from './assets/brosignal.png'
import calendar from './assets/calendar.png'
import cgj from './assets/cgj.webp'
import croissant from './assets/Croissant.png'
import do_polytech from './assets/DO.png'
import gale_shapley from './assets/gale-shapley.png'
import ge from './assets/ge.webp'
import gophers from './assets/GophersInvaders.png'
import hiking from './assets/hiking.webp'
import icon from './assets/icon.png'
import mobidex from './assets/MobiDex.png'
import ndi from './assets/ndi.webp'
import paastech from './assets/PaaSTech.png'
import polynotes from './assets/Polynotes.png'
import reading from './assets/reading.webp'
import ttrpg from './assets/ttrpg.webp'
import videogame from './assets/videogame.webp'
import vu_meter from './assets/VU-Meter.png'

const images: { [key: string]: string } = {
    printing,
    ats,
    boardgame,
    brosignal,
    calendar,
    cgj,
    croissant,
    do_polytech,
    gale_shapley,
    ge,
    gophers,
    hiking,
    icon,
    mobidex,
    ndi,
    paastech,
    polynotes,
    reading,
    ttrpg,
    videogame,
    vu_meter,
}

export function getImage(name: string): string {
    return images[name] || ''
}
