import printing from './assets/3dprinting.webp'
import ats from './assets/ats.webp'
import boardgame from './assets/boardgame.webp'
import brosignal from './assets/brosignal.webp'
import calendar from './assets/calendar.webp'
import cgj from './assets/cgj.webp'
import croissant from './assets/Croissant.webp'
import do_polytech from './assets/DO.webp'
import gale_shapley from './assets/gale-shapley.webp'
import ge from './assets/ge.webp'
import gophers from './assets/GophersInvaders.webp'
import hiking from './assets/hiking.webp'
import icon from './assets/icon.webp'
import mobidex from './assets/MobiDex.webp'
import ndi from './assets/ndi.webp'
import paastech from './assets/PaaSTech.webp'
import polynotes from './assets/Polynotes.webp'
import reading from './assets/reading.webp'
import ttrpg from './assets/ttrpg.webp'
import videogame from './assets/videogame.webp'
import vu_meter from './assets/VU-Meter.webp'

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
