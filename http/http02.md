# http - 02

> ### URL
>* URL(Uniform Resource Identifier)은 브라우저가 정보를 찾는데 필요한 리소스의 위치를 가리킨다. 
>	+ 대부분의 URL은 '스킴://서버위치/경로' 구조로 이루어져 있다.
>	+ 첫 부분인 스킴(scheme)은 웹 클라이언트가 리소스에 어떻게 접근하는지 알려준다.(예 : http://)
>	+ 두 번째 부분은 서버의 위치로, 리소스가 어디에 호스팅 되어 있는지를 알려준다.
>	+ 마지막 부분은 리소스의 경로로, 서버에 존재하는 로컬 리소스들 중에서 요청받은 리소스가 무엇인지 알려준다.
<br><br>
> ### URL 문법
>* 대부분의 URL 스킴의 문법은 일반적으로 9개 부분으로 나뉜다.
>	+ <b><스킴>://<사용자 이름>:<비밀번호>@<호스트>:<포트>/<경로>;<파라미터>?<질의>#<프래그먼트></b>
>	1. 스킴 : 사용할 프로토콜
>		- URL을 해석하는 애플리케이션이 어떤 프로토콜을 사용해 리소스를 요청해야 하는지 알려준다.
>		- 스킴은 알파벳으로 시작해야하고 대소문자를 구분하지 않는다. URL의 나머지 부분과 ' : ' 문자로 구분된다.
>	2. 사용자 이름과 비밀번호
>		- 많은 서버는 자신이 가지고 있는 데이터에 대한 접근을 위해 사용자 이름과 비밀번호를 요구한다.(예 : FTP 서버)
>		- 사용자 이름과 비밀번호를 요구하는 URL 스킴을 사용하는 경우, 그 값들이 삽입되지 않을 경우 기본 사용자 이름과 비밀번호 값을 넣는다.
>	3. 호스트와 포트
>		- 호스트는 접근하려 하는 리소스를 가지고 있는 인터넷상의 호스트 장비를 가리킨다.(도메인명이나 IP주소로)
>		- 포트는 서버가 열어놓은 네트워크 포트로, 내부적으로 TCP 프로토콜을 사용하는 HTTP의 기본 포트는 80이다.		
>	4. 경로
>		- 리소스가 서버의 어디에 있는지 알려준다. 이는 계층적 파일 시스템 경로와 유사한 구조를 가진다.
>		- 경로는 서버가 리소스의 위치를 찾는데 사용하는 정보다.
>	5. 파라미터 
>	 	- 애플리케이션이 서버에 정확한 요청을 하기 위해 필요한 입력 파라미터(추가 정보)를 받는데 사용한다. 
>	 	- 이 컴포넌트는 이름/값 쌍의 리스트로 URL 나머지 부분들로부터 ' ; ' 문자로 구분해 기술한다.(예 : /gnu;type=d)
>	6. 질의 문자열
>		- DB같은 서비스들은 요청받을 리소스 형식의 범위를 좁히기 위해 질문/질의(query)를 받을 수 있다.
>		- 질의 컴포넌트는 ? 문자로 구분한다. 편의상 '&'로 나뉜 '이름=값' 쌍 형태의 질의 문자열을 많이 사용한다. (예 : /inventory?item=6311&color=blue)
>	7. 프래그먼트
>		- 리소스 안에 있는 특정 부분을 가리킬 수 있도록 해주는 컴포넌트 (예를 들어 URL은 HTML 문서에 있는 특정 이미지나 일부를 가리킬 수 있다.)
>		- 프래그먼트는 URL의 오른쪽에 # 문자에 이어서 온다.
>		- 일반적으로 HTTP 서버는 객체 일부가 아닌 전체만 다루기 때문에, client는 서버에 프래그먼트를 전달하지 않는다. 브라우저가 서버로부터 전체 리소스를 받은 후, 프래그먼트를 사용해 보고자하는 리소스의 일부만 보여준다.		
>	+ 이 모든 컴포넌트를 가지는 URL은 거의 없다. 가장 중요한 세 가지 컴포넌트는 <b>스킴, 호스트, 경로</b>다.
<br><br>
> ### 단축 URL
>* 상대 URL 
>	+ 상대 URL은 리소스에 접근하는데 필요한 모든 정보를 담고 있지는 않다. 상대 URL로 리소스에 접근하는데 필요한 모든 정보를 얻기 위해서는 baseURL(기저URL)을 사용해야 한다.(스킴, 호스트, 그 외 다른 컴포넌트 등)
>	+ 상대 URL은 프래그먼트이거나 URL 일부다. URL을 처리하는 브라우저 같은 애플리케이션은 상대 URL과 절대 URL 간 상호 변환이 가능해야 한다.
>+ URL 확장
>	+ URL을 입력한 다음이나 도중에 자동으로 URL을 확장한다. 이는 사용자가 URL을 빠르게 입력하도록 도와준다. 
>	1. 호스트명 확장 : 입력한 호스트 명을 전체 호스트 명으로 확장할 수 있다.
>	2. 히스토리 확장 : 과거에 사용자가 방문했던 URL의 기록을 저장해 놓는 것으로 URL을 입력하면, URL의 앞 글자들을 포함하는 완결된 형태의 URL들을 선택하게 해준다. 
>	+ 이런 자동확장 기능은 proxy 등의 다른 HTTP 애플리케이션에 문제를 발생시킬 수도 있다.
<br><br>
> ### 스킴(scheme)
>* 가장 유명하고 많이 사용되는 몇 가지 스킴들의 요약
    <table>
      <tr align = center>
        <th>스킴(scheme)</th>
        <th>설명</th>
      </tr>        
      <tr>
        <td>http</td>
        <td>일반 URL 포맷을 지키는 하이퍼텍스트 전송 프로토콜 스킴. 포트값이 생략되어 있으면 기본값은 80이다. 기본형식은 <b>http://<호스트>:<포트>/<경로>?<질의>#<프래그먼트></b> </td>
      </tr>
      <tr>
        <td>https</td>
        <td>http를 암호화ㄱ하기 위해 보안 소켓 계층(SSL)을 사용한다. 문법은 http와 같고 기본 포트값은 443이다. 기본형식은 <b>https://<호스트>:<포트>/<경로>?<질의>#<프래그먼트></b> </td>
      </tr>
      <tr>
        <td>mailto</td>
        <td>mailto URL은 이메일 주소를 가리킨다. 기본형식은 <b>mailto: <RFC-822-addr-spec(인터넷 이메일 주소)></b> </td>
      </tr>
      <tr>
        <td>ftp</td>
        <td>file transfer protocol URL은 ftp 서버에 있는 파일을 내려받거나 올리고, ftp 서버의 디렉터리에 있는 콘텐츠 목록을 가져오는데 사용한다.웹 애플리케이션은 데이터에 접근하는 용도로 ftp 스킴을 사용한다. 기본형식은 <b>ftp://<사용자 이름>:<비밀번호>@<호스트>:<포트>/<경로>;<파라미터></b> </td>
      </tr>
      <tr>
        <td>rtsp, rtspu</td>
        <td>RTSP URL은 실시간 스트리밍 프로토콜(Real Time Streaming Protocol)을 통해서 읽을 수 있는 오디오/비디오 같은 미디어 리소스 식별자다. rtspu 스킴에 있는 'u'는 리소스를 읽기 위해 UDP 프로토콜이 사용됨을 뜻한다. 기본형식은 <b>rtsp(u)://<사용자 이름>:<비밀번호>@<호스트>:<포트>/<경로></b> </td>
      </tr>
      <tr>
        <td>file</td>
        <td>이 스킴은 주어진 호스트 기기(로컬 디스크, 네트워크 파일 시스템 혹은 기타 파일 공유 시스템)에서 바로 접근할 수 있는 파일들을 나타낸다. 호스트가 생략되어 있으면, URL을 사용하고 있는 기기의 localhost가 기본값이 된다. 기본형식은 <b>file://<호스트>/<경로></b> </td>
      </tr>
      <tr>
        <td>news</td>
        <td>news 스킴은 특정 문서나 뉴스 그룹에 접근하는데 사용한다. news URL은 해당 리소스가 어디에 있는지에 대한 정보를 포함하지 않는다. 호스트명이나 서버 이름도 제공하지 않으며, 사용자로부터 그 정보를 알아내는 것은 애플리케이션의 몫이다. news URL에서 선점한 '@' 문자는 뉴스 그룹을 가리키는 뉴스 URL과 특정 뉴스 문서를 가리키는 뉴스 URL을 구분하기 위해 사용된다. 기본형식은 <b>news:<newsgroup(뉴스그룹)></b> </td>
      </tr>
      <tr>
        <td>telnet</td>
        <td>이 스킴은 대화형 서비스에 접근하는데 사용한다. 대화형 애플리케이션은 telnet 프로토콜을 통해 접근할 수 있다. 기본형식은 <b>telnet://<사용자 이름>:<비밀번호>@<호스트>:<포트>/</b> </td>
      </tr>
    </table>