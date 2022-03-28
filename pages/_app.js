import { useEffect } from 'react'
import { db, goOffline, goOnline, onDisconnect, onValue, push, ref, runTransaction } from '../components/firebase'
import moment from 'moment'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    useEffect(() => {

        const onIdleTabGoOffline = (ms) => {

            let timer

            document.addEventListener('visibilitychange', () => {

                if(document.hidden){
        
                    timer = setTimeout(() => goOffline(db), ms)
        
                }
                else{
        
                    clearTimeout(timer)

                    goOnline(db)
        
                }
        
            })

        }

        onValue(ref(db, '.info/connected'), snapshot => {
            
            if (snapshot.val()) {

                push(ref(db, 'concurrent'), { connected: 'a__' + moment().format('DD/MM/YYYY HH:mm') }).then(con => {

                    onDisconnect(con).remove()
                    onIdleTabGoOffline(10 * 60 * 1000)

                }).catch(error => { console.log('Unable to add concurrent user...') })

            }
        }) 

        runTransaction(ref(db, 'visits/' + moment().format('YYYY-MM')), value => value + 1)

    }, [])

    return <Component {...pageProps} />

}

export default MyApp
