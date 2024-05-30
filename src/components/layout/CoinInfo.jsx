import {Flex, Typography} from 'antd'

export default function CoinInfo({coin , withSimbol}) {
    return (
        <Flex align='center'>
            <img src={coin.icon} alt={coin.name} style={{width: 40, marginRight: 10}} />
            <Typography.Title level={2} style={{margin: 0}}>
              {withSimbol && coin.symbol} {coin.name}
            </Typography.Title>
        </Flex>
    )
}