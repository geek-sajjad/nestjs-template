export const tradeSymbol = [
  'BTCUSDT',
  'ETHUSDT',
  'XRPUSDT',
  'LTCUSDT',
  'BCHUSDT',
  'EOSUSDT',
  'XLMUSDT',
  'ADAUSDT',
  'XMRUSDT',
  'NEOUSDT',
  'BNBUSDT',
  'DOTUSDT',
  'LINKUSDT',
  'UNIUSDT',
  'DOGEUSDT',
  'USDTUSDT',
  'AAVEUSDT',
  'XTZUSDT',
  'VETUSDT',
  'TRXUSDT',
  'ATOMUSDT',
  'SOLUSDT',
  'MATICUSDT',
  'COMPUSDT',
  'MKRUSDT',
  'FTTUSDT',
  'THETAUSDT',
  'AVAXUSDT',
  'ALGOUSDT',
  'FILUSDT',
  'CAKEUSDT',
  'CROUSDT',
  'LUNAUSDT',
  'MANAUSDT',
  'SNXUSDT',
  'BATUSDT',
  'ICPUSDT',
  'GRTUSDT',
  'ENJUSDT',
  'HOTUSDT',
  'QTUMUSDT',
  'DASHUSDT',
  'KSMUSDT',
  'ETCUSDT',
  'WAVESUSDT',
  'ZECUSDT',
  'USDT/IRT',
  'ROOTUSDT',
  'VTRXUSDT',
  'PLYUSDT',
  'PEPE2USDT',
] as const;

export type TradeSymbol = (typeof tradeSymbol)[number];
