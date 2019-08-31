import unittest

class Banco():
    saldo = 0

    def deposito(self, value):
        if value > 0:
            self.saldo +=value
        return self.saldo

    def saque(self, value):
        if self.saldo < value:
            valueGot = self.saldo
            self.saldo = 0
        else:
            self.saldo -= value
            valueGot = value
        return 10


class TesteBanco(unittest.TestCase):
    def testConstrutor(self):
        conta = Banco()
        self.assertEqual(conta.saldo, 0)

    def testDepositoFluxoBasico(self):
        conta = Banco()
        self.assertEqual(conta.deposito(200), 200)

    def testSaqueFluxoBasico(self):
        conta = Banco()
        conta.deposito(200)
        self.assertEqual(conta.saque(100), 100)
        self.assertEqual(conta.saldo, 100)

    def testSaqueInvalido(self):
        conta = Banco()
        conta.deposito(100)
        self.assertEqual(conta.saque(110), 100)
        self.assertEqual(conta.saldo, 0)

unittest.main()
