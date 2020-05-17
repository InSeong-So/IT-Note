package java.observer;

import java.util.Random;

public class RandomNumberGenerator extends NumberGenerator {

	private Random random = new Random();

	private int number;

	public int getNumber() {
		return number;
	}

	@Override
	public void excute() {
		for (int i = 0; i < 20; i++) {
			number = random.nextInt(50);
			notifyObservers();
		}
	}

}
