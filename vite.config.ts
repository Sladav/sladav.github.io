import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        statshammer: 'statshammer/index.html',

        beastsOfChaos: 'factions/beastsOfChaos/index.html',
        bladesOfKhorne: 'factions/bladesOfKhorne/index.html',
        citiesOfSigmar: 'factions/citiesOfSigmar/index.html',
        daughtersOfKhaine: 'factions/daughtersOfKhaine/index.html',
        disciplesOfTzeentch: 'factions/disciplesOfTzeentch/index.html',
        endlessSpells: 'factions/endlessSpells/index.html',
        fleshEaterCourts: 'factions/fleshEaterCourts/index.html',
        fyreslayers: 'factions/fyreslayers/index.html',
        gloomspiteGitz: 'factions/gloomspiteGitz/index.html',
        hedonitesOfSlaanesh: 'factions/hedonitesOfSlaanesh/index.html',
        idonethDeepkin: 'factions/idonethDeepkin/index.html',
        incarnates: 'factions/incarnates/index.html',
        kharadronOverlords: 'factions/kharadronOverlords/index.html',
        legionOfAzgorh: 'factions/legionOfAzgorh/index.html',
        legionOfTheFirstPrince: 'factions/legionOfTheFirstPrince/index.html',
        luminethRealmLords: 'factions/luminethRealmLords/index.html',
        maggotkinOfNurgle: 'factions/maggotkinOfNurgle/index.html',
        nighthaunt: 'factions/nighthaunt/index.html',
        ogorMawtribes: 'factions/ogorMawtribes/index.html',
        orrukWarclans: 'factions/orrukWarclans/index.html',
        ossiarchBonereapers: 'factions/ossiarchBonereapers/index.html',
        seraphon: 'factions/seraphon/index.html',
        skaven: 'factions/skaven/index.html',
        slavesToDarkness: 'factions/slavesToDarkness/index.html',
        sonsOfBehemat: 'factions/sonsOfBehemat/index.html',
        soulblightGravelords: 'factions/soulblightGravelords/index.html',
        stormcastEternals: 'factions/stormcastEternals/index.html',
        sylvaneth: 'factions/sylvaneth/index.html',
      }
    }
  },
  plugins: [react()]
})
