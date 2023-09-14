---
sidebar_label: Proof-of-Stake on Celestia
description: Learn about Proof-of-Stake on Celestia
---

# Proof-of-Stake on Celestia

Celestia is a proof of stake blockchain based on Comet-BFT and the Cosmos-SDK. Celestia supports in-protocol delegation and will start with an initial validator set of 100.

Staking TIA as a validator or delegator enables you to earn staking rewards from the network. Validators charge a fee to delegators which gives them a percentage of staking rewards.

For more details on how proof of stake works on Cosmos SDK chains like Celestia, see
[this document](https://docs.cosmos.network/main/modules/staking#:~:text=The%20module%20enables%20Cosmos%20SDK,validator%20set%20for%20the%20system).

| Property | Details |
| -------- | ------- |
| Consensus Mechanism | Proof-of-Stake (PoS) |
| Blockchain Framework | Cosmos SDK |
| Validator Set Size | 100 |
| Delegation Support | Yes |

## Inflation

TIA inflation starts at 8% annually and decreases by 10% every year
until it reaches the long term issuance rate of 1.5%. Exact annual
inflation rates can be found in the diagram below.

![inflation diagram](../img/learn/Celestia_TIA_Inflation.png)

The annual provisions for inflation are calculated based on the
total supply of TIA at the beginning of each year. To calculate how
many TIA to issue per block, Celestia uses the block timestamp
rather than the block height since the time between blocks can vary
and cause actual issuance to be higher than the target.

More details can be found in [ADR019](https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-019-strict-inflation-schedule.md).

Learn how to stake on your own at the community dashboards listed[here](https://docs.celestia.org/developers/staking/).
