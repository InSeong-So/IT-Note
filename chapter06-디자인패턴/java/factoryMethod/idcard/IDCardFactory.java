package java.factoryMethod.idcard;

import java.util.ArrayList;
import java.util.List;

import java.factoryMethod.framework.Factory;
import java.factoryMethod.framework.Product;

public class IDCardFactory extends Factory {

	private List owners = new ArrayList<>();

	@Override
	protected Product createProduct(String owner) {
		return new IDCard(owner);
	}

	@Override
	protected void registerProduct(Product product) {
		owners.add(((IDCard) product).getOwner());
	}

	public List getOwners() {
		return owners;
	}
}
