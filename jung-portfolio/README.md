# sri-react
### jung project

##### 0. 초기설정
 - 초기세팅 : https://velopert.com/814
 - 초기세팅(babel-loder) : http://pro-self-studier.tistory.com/19
 - 폴더구조 : https://d2.naver.com/helloworld/184813
##### 1-1. css-loader
 - 초기세팅 : https://velopert.com/1555
 
##### 1-2. style-loader
 - 초기세팅 :  https://velopert.com/3447

##### 2. JSX
    return (
        /* html 마크업 */
        <div>
            <h1>html 마크업 가능</h1>
        </div>
        
        /* 엘리먼트 생성 */
        React.createElement('h1', {class: 'className'}, 'react 엘리먼트 생성')
        
        /* 삼항연산자 표기 */
        let sessitonFlag = this.props.user.session
        return <div>
            <a href={(sesstionFlag) ? '/logout' : '/login'}>{(sesstionFlag) ? '/logout' : '/login'}</a>
            
        /* JSX 주의사항 */
        &copy , &mdash, &lt, &gt 와 같은 엔티티코드(entity code)를 사용하여도 문자 그대로 출력된다.
        
        /* css 표기법 */
        css 는 카멜 표기법을 사용한다.
        ex) font-size -> fontSize / background-color -> backgroundColor
        
        /* class 와 for 사용법 */
        class -> className
        for -> htmlFor
        ex) <label className="blind" htmlFor={this.props.id}>{this.props.label}</label>
        
        /* html 폼요소의 불 값 사용 */
        disabled / required / checked / autofocus / reaOnly 등...
        속성값을 항상 {} 안에 넣어야 하며, 문자열로 true, false 를 입력하여야 한다.
        ex) <input type="text" disabled={false} />
    )

##### 3. React Router
 - 초기 세팅 : https://dobbit.github.io/redux/advanced/UsageWithReactRouter.html
 - react-router v3 과 v4 차이 : https://blueshw.github.io/2017/06/22/static-routing-vs-dynamic-routing/
 
##### 4. Express