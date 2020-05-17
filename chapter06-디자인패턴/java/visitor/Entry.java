package java.visitor;

import java.util.Iterator;

public abstract class Entry implements Element {

	public abstract String getName();

	public abstract int getSize();

	public Entry add(Entry entry) throws FileTreatmentException {
		throw new FileTreatmentException();
	}

	public Iterator iterator() throws FileTreatmentException {
		throw new FileTreatmentException();
	}

	public String toString() {
		return getName() + " (" + getSize() + ")";
	}

}
