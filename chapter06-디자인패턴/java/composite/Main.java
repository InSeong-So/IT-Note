package java.composite;

public class Main {

	public static void main(String[] args) {
		try {
			System.out.println("Making root entries...");
			Directory rootdir = new Directory("root");
			Directory bindir = new Directory("bin");
			Directory tmpdir = new Directory("tmp");
			Directory usrdir = new Directory("usr");
			rootdir.add(bindir);
			rootdir.add(tmpdir);
			rootdir.add(usrdir);
			bindir.add(new File("vi", 10000));
			bindir.add(new File("latex", 20000));
			rootdir.printList();

			System.out.println("");
			System.out.println("Making user entries...");
			Directory kim = new Directory("kim");
			Directory lee = new Directory("lee");
			Directory park = new Directory("park");
			usrdir.add(kim);
			usrdir.add(lee);
			usrdir.add(park);
			kim.add(new File("diary.html", 100));
			kim.add(new File("Composite.java", 200));
			lee.add(new File("memo.tex", 300));
			park.add(new File("game.doc", 400));
			park.add(new File("junk.mail", 500));
			rootdir.printList();

		} catch (FileTreatmentException e) {
			e.printStackTrace();
		}
	}
}
