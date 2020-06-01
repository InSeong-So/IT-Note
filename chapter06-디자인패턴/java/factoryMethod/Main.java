package java.factoryMethod;

import java.factoryMethod.framework.Factory;
import java.factoryMethod.framework.Product;
import java.factoryMethod.idcard.IDCardFactory;

public class Main {

	public static void main(String[] args) {
		Factory factory = new IDCardFactory();
		Product card1 = factory.create("세종대왕");
		Product card2 = factory.create("이순신");
		Product card3 = factory.create("강감찬");
		card1.use();
		card2.use();
		card3.use();
	}
}
