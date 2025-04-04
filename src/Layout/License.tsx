import { SolidMarkdown } from 'solid-markdown'
import { Box, CssBaseline } from '@suid/material'

const markdown = `
# About me background

[Computer Ram Components](https://negativespace.co/computer-ram-components/) by Charlie Belvin under [CC 0](https://creativecommons.org/publicdomain/zero/1.0/deed.en)

# Professional Experiences

General Electric: Grid Solutions Montpellier: [Entrée du site de General Electric Grid Solutions Montpellier](https://lh3.googleusercontent.com/p/AF1QipNnbtUADkWph3sGd6Zx4esS3KNEjrcLsKURaGgA=s680-w680-h510) by GE Vernova, unknown license  
ATS Sport: [ATS Sport](https://lh3.googleusercontent.com/p/AF1QipPOlBTShD2SeUyNX5ugqSRP7l3EY8hu1oQvj6jD=s680-w680-h510) by ATS Sport, unknown license

# Education background

Université de Montpellier: [Entrée du Site Triolet de l'Université de Montpellier](https://commons.wikimedia.org/wiki/File:20200618_141712_cor.jpg) by CommFDS under [CC 4.0](https://creativecommons.org/licenses/by/4.0/)

# Personal Experience

Code Game Jam 2020: [Code Game Jam 2020](https://codegamejam.extragames.fr/) by Antoine Chollet, unknown license  
Nuit de l'Info 2023: [Nuit de l'Info](https://nuitdelinfo.com/) by unknown, unknown license

# Projects

## Background

[Heat Sink Motherboard](https://negativespace.co/heat-sink-motherboard/) by Lenharth Systems under [CC 0](https://creativecommons.org/publicdomain/zero/1.0/deed.en)

## Logo

Orka & Cloudlet logo: [Polytech DO](https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/devops) by Polytech Montpellier, unknown license  
Polynotes logo: Polynotes by Polytech Montpellier, unknown license  
PaasTech logo: DO students, generated with AI and retouched, [CC 4.0](https://creativecommons.org/licenses/by/4.0/)  
MobiDex logo: [Poké Ball icon](https://commons.wikimedia.org/wiki/File:Pok%C3%A9_Ball_icon.svg) by [Andreuvv](https://commons.wikimedia.org/wiki/User:Andreuvv) under public domain  
Gophers Invaders logo: [gophers](https://github.com/ashleymcnamara/gophers) by Ashley McNamara under [CC 4.0](https://creativecommons.org/licenses/by/4.0/deed.en)  
Croissant Dashboard logo: [Croissant Emoji](https://emojipedia.org/microsoft/windows-10-october-2018-update/croissant) by Microsoft under font licensing  
Discord WebHook Planner logo: [Mozilla FxEmoji](https://github.com/mozilla/fxemoji) by Mozilla under [CC 4.0](https://creativecommons.org/licenses/by/4.0/deed.en)

If not specified, made by myself and under [CC 4.0](https://creativecommons.org/licenses/by/4.0/).

## GitHub contributions

Open pull request: [git-pull-request](https://www.svgrepo.com/svg/347755/git-pull-request) by Octicons Interface Icons under MIT License  
Merged pull request: [git-merge](https://www.svgrepo.com/svg/347753/git-merge) by Octicons Interface Icons under MIT License  
Closed pull request: [git-pull-request-closed](https://www.svgrepo.com/svg/347754/git-pull-request-closed) by Octicons Interface Icons under MIT License  
Star: [star](https://www.svgrepo.com/svg/347852/star) by Octicons Interface Icons under MIT License  
Repo forked: [repo-forked](https://www.svgrepo.com/svg/347825/repo-forked) by Octicons Interface Icons under MIT License  

# Hobbies

Hiking illustration: [Pic Saint Loup - Hérault - France; le 10 janvier 2010, sous la neige](https://commons.wikimedia.org/wiki/File:Pic-St-Loup--H%C3%A9rault-IMG_1877.jpg) by Ophrys34 under [CC 3.0](https://creativecommons.org/licenses/by/3.0/)  
TTRPG illustration: [A pile of dice sitting on top of a table. Cube play role playing game.](https://boudewijnhuijgens.getarchive.net/amp/media/cube-play-role-playing-game-978315) by Pixabay (?) under [CC 0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.en)  
Reading illustration: [A long narrow aisle filled with lots of books. Books library education, education.](https://picryl.com/media/books-library-education-education-65cbf2) by Pixabay (?) under [CC 0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.en)  
Board game illustration: [A game of Settlers of Catan.jpg](https://commons.wikimedia.org/wiki/File:A_game_of_Settlers_of_Catan) by [Yonghokim](https://commons.wikimedia.org/wiki/User:Yonghokim) under [CC 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)  
3D printing illustration: [3D-принтер в работе.jpg](https://commons.wikimedia.org/wiki/File:3D-%D0%BF%D1%80%D0%B8%D0%BD%D1%82%D0%B5%D1%80_%D0%B2_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5.jpg) by Angelikagub under [CC 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)  
Video game illustration: [Nova Francia - Entrée](https://nova-francia.espie.dev) by Rémi Espié under [CC 4.0](https://creativecommons.org/licenses/by/4.0/)
`

export default function License() {
    return (
        <Box
            sx={{
                m: 1,
            }}
        >
            <CssBaseline />
            <SolidMarkdown children={markdown} />
        </Box>
    )
}
