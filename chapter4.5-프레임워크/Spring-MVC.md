# Spring-MVC-basic

# 웹 어플리케이션 구조

> 사용자 요청(브라우저)프론트 컨트롤러(DispatcherServlet) → 뷰(jsp 파일 등)컨트롤러서비스DAO(Data Access Object)Database

# 서비스 객체 구현

## 방법 1 : new 연산자를 이용한 service 객체 생성 및 참조

    MemberService service = new MemberService();

## 방법 2 : 스프링 설정파일을 이용한 서비스 객체 생성 및 의존 객체 자동 주입

    <beans:bean id="service" class="com.spring.basic.member.service.MemberService" />
    							↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    @Autowired
    MemberService service;

## 방법3 : 어노테이션을 이용한 서비스 객체 생성 및 의존 객체 자동 주입

    @Repository("memService")
    public class MemberService implements IMemberService{
    							↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    @Resource(name="memService")
    MemberService service;

# DAO 객체 구현

## 어노테이션을 이용한 DAO 객체 생성 및 의존 객체 자동 주입

    @Repository
    public class MemberDao implements IMemberDao{
    							↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    @Autowired
    MemberDao dao;

# 부가 내용

## 한글 처리(web.xml 추가)

    <filter>
    		<filter-name>encodingFilter</filter-name>
    		<filter-class>
    			org.springframework.web.filter.CharacterEncodingFilter     
    		</filter-class>
    		<init-param>
    			<param-name>encoding</param-name>   
    			<param-value>UTF-8</param-value>
    		</init-param>
    		<init-param>
    			<param-name>forceEncoding</param-name>  
    			<param-value>true</param-value>
    		</init-param>
    	</filter>    
    
    	<filter-mapping>
    		<filter-name>encodingFilter</filter-name>
    		<url-pattern>/*</url-pattern>                 
    	</filter-mapping>

# 컨트롤러의 기능

## @RequestMapping을 이용한 URL 매핑

## 메소드에 @RquestMapping 적용

    # 개념
    	컨트롤러 내부의 세부 기능으로 구분한다.
    
    # 실행 프로세스
    	http://locatlhost:8080/basic/memJoin → memJoin() 실행
    	
    # 사용 방법 1
    	@RequestMapping("/memJoin")
    	public String memJoin(){
    		...
    	}
    	
    # 사용 방법 2
    	* 전송방식이 GET 방식일 경우(속성 생략 가능)	
    		@RequestMapping(value="memJoin")
    		
    	* 전송방식이 POST 방식일 경우(속성 반드시 기입)
    		@RequestMapping(value="memJoin", method=RequestMethod.POST)

## 클래스에 @RequestMapping 적용

    # 개념
    	기능에 따른 컨트롤러 클래스를 제작하는데 사용한다.
    
    # 예시
    	@Controller
    	@RequestMapping("/member")
    	public class MemberController{
    		@RequestMapping(value="/memJoin", method=RequestMethod.POST)
    			...
    			
    		@RequestMapping(value="/memLogin", method=RequestMethod.POST)
    			...
    	}
    	
    # mapping URL
    	http://localhost:8080/basic/member/memJoin
    	http://localhost:8080/basic/member/memLogin

---

## 요청 파라미터

## HttpServletRequest 객체를 이용한 HTTP 전송 정보 얻기

    # 사용 방법
    	public String memJoin(Model model, HttpServletRequest request){
    		String memid = request.getParamter("memId");
    	}

## @RequestParam 어노테이션을 이용한 HTTP 전송 정보 얻기

    # 사용 방법
    	public String memJoin(Model model, @RequestParam("memId") String memId,
    			@RequestParam("memPw") String memPw) {
    		String memid = request.getParamter("memId");
    	}

- @RequestParam의 속성
    - value : 생략해도 된다. (value="")
    - required : 생략해도 된다. (required=true||false), 입력 여부를 정하는 속성이다.
    - default : 생략해 된다. 입력을 하지 않아도 기본적으로 들어가는 값을 지정하는 속성이다.

## 받아온 전송정보 사용하기

    # 각 파라미터를 설정하여 사용하는 방법
    ## Controller 코드
    	@RequestMapping(value="/memJoin", method=RequestMethod.POST)
    	public String memJoin(Model model, HttpServletRequest request) {
    		String memId = request.getParameter("memId");
    		String memPw = request.getParameter("memPw");
    		String memMail = request.getParameter("memMail");
    		String memPhone1 = request.getParameter("memPhone1");
    		String memPhone2 = request.getParameter("memPhone2");
    		String memPhone3 = request.getParameter("memPhone3");
    		
    		service.memberRegister(memId, memPw, memMail, memPhone1, memPhone2, memPhone3);
    		
    		model.addAttribute("memId", memId);
    		model.addAttribute("memPw", memPw);
    		model.addAttribute("memMail", memMail);
    		model.addAttribute("memPhone", memPhone1 + " - " + memPhone2 + " - " + memPhone3);
    		
    		return "memJoinOk";
    	}
    
    ## View 코드	
    	<h1> memJoinOk </h1>
    	ID : ${memId}<br />
    	PW : ${memPw}<br />
    	Mail : ${memMail} <br />
    	Phone : ${memPhone} <br />
    	
    # 커맨드 객체를 생성하여 사용하는 방법(getter, setter 반드시 필요)
    ## Controller 코드
    	@RequestMapping(value="/memJoin", method=RequestMethod.POST)
    	public String memJoin(Member member) {
    		
    		service.memberRegister(member.getMemId(), member.getMemPw(),
    				member.getMemMail(), member.getMemPhone1(), member.getMemPhone2(),
    				member.getMemPhone3());
    		
    		return "memJoinOk";
    	}
    
    ## View 코드	
    	<h1> memJoinOk </h1>
    	ID : ${member.memId}<br />
    	PW : ${member.memPw}<br />
    	Mail : ${member.memMail} <br />
    	Phone : ${member.memPhone1}, ${member.memPhone2}, ${member.memPhone3} <br />

> 최근엔 개발자의 스트레스를 줄이기 위해 커맨드 객체를 사용하는 방법을 애용한다.

---

## @ModelAttribute

    # 사용 방법 1
    	## 컨트롤러
    		1. public String memJoin(Member member){...}
    		
    		2. public String memLogin(Member member){...}
    		
    		3. public String memRemove(@ModelAttribute("mem") Member member){...}
    	
    	## 뷰
    		1. ${member.memId}
    		2. ${member.memId}
    		3. ${mem.memId}

> @ModelAttribute를 이용하면 커맨드 객체의 이름을 변견할 수 있고, 변경된 이름은 뷰에서 커맨드 객체를 참조할 때 사용된다.중복된 이름으로 개발 간 스트레스를 받지 않아도 된다.

    # 사용 방법 2
    	@ModelAttribute("serverTime")
    	public String getServerTime(Locale locale) {
    		
    		Date date = new Date();
    		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
    		
    		return dateFormat.format(date);
    	}

> @ModelAttribute가 적용된 메소드는 다른 메소드가 호출되어질지라도 공통적으로 같이 호출된다.

---

## 커맨드 객체 프로퍼티 데이터 타입

> 데이터가 기본 타입인 경우부가 설명 : 필요한 절차 없이 받고 싶은 타입으로 지정하면 스프링이 알아서 설정해준다.

    # memberJoin.html
    	ID : <input type="text" name="memId" ><br />
    	PW : <input type="password" name="memPw" ><br />
    	MAIL : <input type="text" name="memMail" ><br />
    	AGE : <input type="text" name="memAge" size="4" value="0"><br />
    
    # Member.java
    	private String memId;
    	private String memPw;
    	private String memMail;
    	private int memAge;

> 데이터가 중첩 커맨드 객체를 이용한 List 구조인 경우해당하는 이름의 커맨드 객체를 새로 하나 만들어 저장한다.List 타입에 해당 커맨드 객체를 저장한다.

    # memberJoin.html
    	PHONE1 : <input type="text" name="memPhones[0].memPhone1" size="5"> -
    			 <input type="text" name="memPhones[0].memPhone2" size="5"> -
    			 <input type="text" name="memPhones[0].memPhone3" size="5"><br />
    	PHONE2 : <input type="text" name="memPhones[1].memPhone1" size="5"> -
    			 <input type="text" name="memPhones[1].memPhone2" size="5"> -
    			 <input type="text" name="memPhones[1].memPhone3" size="5"><br />
    			 
    # Member.java
    	private List<MemPhone> memPhones;

---

## Model & ModelAndView

> 컨트롤러에서 뷰에 데이터를 전달하기 위해 사용되는 객체이다.

    # Model : View에 데이터만 전달하는 객체
    	@RequestMapping(value = "/memModify", method = RequestMethod.POST)
    	public String memModify(Model model, Member member) {
    		
    		Member[] members = service.memberModify(member);
    		
    		// 데이터 이름, 데이터 값
    		model.addAttribute("memBef", members[0]);
    		model.addAttribute("memAft", members[1]);
    		
    		// 뷰 이름
    		return "memModifyOk";
    	}
    
    # ModelAndView : 데이터와 뷰의 이름을 함께 전달하는 객체
    	@RequestMapping(value = "/memModify", method = RequestMethod.POST)
    	public ModelAndView memModify(Member member) {
    		
    		Member[] members = service.memberModify(member);
    		ModelAndView mav = new ModelAndView();
    		
    		// 데이터 이름, 데이터 값
    		mav.addObject("memBef", members[0]);
    		mav.addObject("memAft", members[1]);
    		
    		// 뷰 이름
    		mav.setViewName("memModifyOk");
    		
    		// 객체 반환
    		return mav;
    	}

# 세션(Session)과 쿠키(Cookie)

## Connectionless Protocol

> 웹 서비스는 클라이언트와 서버의 관계를 유지하지 않는 특성을 지닌 HTTP 프로토콜을 기반으로 한다.

    # 서버의 부하가 최소화, 기능 구현 어려움
    	클라이언트 |요청(Request) : 서버 연결 / 응답(Response) : 서버 연결 종료 | 서버
    
    
    # 서버와 클라이언트의 연결 상태를 유지
    	클라이언트 | 로그인 요청 / 응답, 상품 주문 요청 / 응답 | 서버

> 이는 서버의 부하를 줄일 수 있는 장점은 있으나 클라이언트의 요청마다 매번 새로운 연결이 생성되어 일반적인 상태 유지 기능의 구현이 어렵다.이러한 Connectionless Protocol의 불편함을 해결하기 위해서 세션과 쿠키를 이용한다.세션과 쿠키는 클라이언트-서버의 연결을 유지해주는 방법이다.

[Untitled](./-193addfe-38b6-4738-a44c-74dc1ddca338.csv)

---

## 세션(Session)

> 패키지 com.spring.basic2

## HttpServletRequest를 이용한 세션 사용

> 컨트롤러의 메소드에서 파라미터로 HttpServletRequest를 받으면 된다.회원정보 수정 또는 삭제 요청세션에 Member 속성이 존재하는가? * NO : Exception 발생 * YES : 회원정보 수정 또는 삭제 성공 응답

    # 사용 방법
    	HttpSession session = request.getSession();
    	session.setAttribute("세션 이름", 값);

## HttpSession을 이용한 세션 사용

> HttpServletRequest, HttpSession의 차이점은 거의 없으므로 차이점은 세션 객체를 어떻게 가져오느냐 정도이다.

    # HttpServletRequest
    	파라미터로 HttpServletRequest를 받고 getSession()으로 세션을 가져와 사용
    		public String memLogin(Member member, HttpServletRequest request){...}
    
    # HttpSession
    	파라미터로 HttpSession을 받아 사용
    		public String memLogin(Member member, HttpSession session){...}

## 세션 삭제

> 저장된 속성이 더 이상 필요 없을 때 시행하며 주로 로그아웃 또는 회원 탈퇴 등에 사용된다.

    session.invalidate();

## 세션 주요 메소드 및 플로어

[Untitled](./-ab250add-8f46-4008-852a-effbb5465693.csv)

    # 세션 흐름
    	1. 클라이언트 : 서버에게 연결 요청
    	2. 서버 : setAttribute("member", mem);
    	3. 세션 : member 속성 저장
    	4. 서버 : 클라이언트에게 응답
    	5. 클라이언트 : 서버에게 특정 행동 요청
    	6. 서버 : getAttribute("member");
    	7. 세션 : member 속성 반환
    	8. 서버 : 클라이언트에게 응답

---

## 쿠키(Cookie)

> 패키지 com.spring.basic3

## @CookieValue 어노테이션을 이용한 쿠키 사용

> @CookieValue 어노테이션의 value 속성은 쿠키 이름으로, value에 명시한 쿠키가 없을 경우 Exception이 발생한다.required 속성으로 예외를 막으며 default 값이 true로 required를 false로 설정하면 예외 방지할 수 있다.

    # 쿠키 설정
    	@RequestMappin("/index")
    	public String mallIndex(Mall mall, HttpServletResponse response){
    		Cookie genderCookie = new Cookie("gender", mall.getGender());
    		
    		// 쿠키의 존재 여부 확인
    		if(mall.isCookieDel()){
    		
    			// 쿠키가 존재하는 시간 설정
    			genderCookie.seMaxAge(0);
    			mall.setGender(null);
    		} else {
    		
    			// 쿠키 존재시간 설정 : 1분 * 1시간 * 24시간 * 30일 = 한달을 초로 환산한 시간
    			genderCookie.setMaxAge(60*60*24*30);
    		}
    			response.addCookie(genderCookie);
    		return "/mall/main";
    	}
    
    # 쿠키 가져오기
    	@RequestMappin("/index")
    	public String mallIndex(Mall mall, @CookieValue(value="gender",
    		required=false) Cookie genderCookie, HttpServletRequest request){
    		
    		if(genderCookie != null){
    			
    			// 쿠키 값 가져오기
    			mall.setGender(genderCookie.getValue());
    		}	
    		
    		return "/mall/index";
    	}