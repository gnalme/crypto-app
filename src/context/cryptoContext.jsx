import { createContext, useContext, useEffect, useState } from 'react';
import {fakeFetchCrypto, fetchAssets} from '../api.js'
import { percentDiference } from '../utils.js';

const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false
})

export function CryptoContextProvider({children}) {
    const [loading, setLoading] = useState(false)
    const [crypto, setCrypto] = useState([])
    const [assets, setAssets] = useState([])

    function mapAssets(assets, result) {
        return assets.map(asset => {
            const coin = result.find((c) => c.id === asset.id)//находми конкретную монету с ее данными

                return {
                    grow: asset.price < coin.price,
                    growPercent: percentDiference(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                    name: coin.name,
                    ...asset,
                }
        })
        
    }

    useEffect(() => {
        async function preLoad() {
            setLoading(true)
            const {result} = await fakeFetchCrypto()
            const assets = await fetchAssets()

            setAssets(mapAssets(assets,result))
            setCrypto(result)
            setLoading(false)
        }
        preLoad()
    }, [])

    function addAsset(newAsset) {
        setAssets((prev) => mapAssets([...prev, newAsset], crypto))
    }

    return (
        <CryptoContext.Provider value={{loading, crypto, assets, addAsset}}>
            {children}
        </CryptoContext.Provider>
    )
}

export default CryptoContext;

export function useCrypto() {
    return useContext(CryptoContext)
}