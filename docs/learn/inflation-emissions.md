# Inflation & emissions

:::warning TODO
TODO: Inflation-over-10-years diagram (from token distribution sheet)
:::

TIA issuance starts at 8% annually and decreases by 10% every year until
it reaches the long term issuance rate of 1.5%. Exact annual issuance rates
can be found in the table below.

The annual provisions for issuance are calculated based on the total supply
of TIA at the beginning of each year. To calculate how many TIA to issue per
block, Celestia uses the block timestamp rather than the block height since
the time between blocks can vary and cause actual issuance to be higher than
the target.

The community pool will receive 2% of issuance. The issuance rate is not
subject to on-chain governance.

More details can be found in [ADR019](https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-019-strict-inflation-schedule.md).
