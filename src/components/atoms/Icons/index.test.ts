import Icons from './index';

describe('Icon Exports', () => {
  it('should export BTC Icon', () => {
    expect(Icons.BTC).toBeDefined();
  });

  it('should export ETH Icon', () => {
    expect(Icons.ETH).toBeDefined();
  });

  it('should export ReceiveMoney Icon', () => {
    expect(Icons.ReceiveMoney).toBeDefined();
  });

  it('should export SOL Icon', () => {
    expect(Icons.SOL).toBeDefined();
  });

  it('should export SendMoney Icon', () => {
    expect(Icons.SendMoney).toBeDefined();
  });
});
