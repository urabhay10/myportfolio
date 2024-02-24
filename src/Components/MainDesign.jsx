import React, { Component } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import githubLogo from '../images/github-logo.png';
import mongodbLogo from '../images/mongodb-logo.png';
import nodeLogo from '../images/node-logo.png';
import expressLogo from '../images/express-logo.png';
import htmlLogo from '../images/html-logo.png';
import bootstrapLogo from '../images/bootstrap-logo.png';
import reactLogo from '../images/react-logo.png';
import cssLogo from '../images/css-logo.png';
import kotlinLogo from '../images/kotlin-logo.png';
import jsLogo from '../images/js-logo.png';
import cppLogo from '../images/cpp-logo.png';
import pythonLogo from '../images/python-logo.png';

export default class MainDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topHovered: false,
            fadetop: false,
            bottomHovered: false,
            fadebottom: false,
            leftHovered: false,
            fadeleft: false,
            rightHovered: false,
            faderight: false,
            props: this.props,
            isPresent: {
                top: true,
                bottom: true,
                left: true,
                right: true,
            },
            loading: true,
        };
    }
    imageStyle = {
        width: '100%',
        marginTop: '1px',
        marginBottom: '1px',
    }
    imageStyle2 = {
        height: 105 * this.props.dims + 'px',
        marginLeft: '1px',
        marginRight: '1px',
    }
    goBack = async () => {
        console.log(this.state.props.midSub, this.state.props.mid)
        if (this.state.props.midSub !== '') return;
        this.setState({
            isPresent: {
                top: true,
                bottom: true,
                left: true,
                right: true,
            }
        })
        await this.props.showrl('close')
        await this.untypeMid()
        await this.typeMid("Abhay Upadhyay", "Hi I'm")
        this.setState({
            props: {
                ...this.state.props,
                top: 'Skills',
                bottom: 'About me',
                left: 'Education',
                right: 'Projects',
                // mid: 'Abhay Upadhyay',
                // midSub: "Hi I'm"
            }
        })
    }

    untypeMid = async () => {
        while (this.state.props.mid.length > 0) {
            await new Promise(r => setTimeout(r, 80));
            this.setState({ props: { ...this.state.props, mid: this.state.props.mid.substring(0, this.state.props.mid.length - 1) } });
        }
    }
    typeMid = async (midtitle, midSubTitle) => {
        this.setState({ props: { ...this.state.props, mid: '', midSub: '' } });
        let text1 = midtitle || this.state.props.mid;
        let text1Sub = midSubTitle === -1 ? '' : midSubTitle || this.state.props.midSub;
        let i = 0;
        while (i < text1Sub.length) {
            await new Promise(r => setTimeout(r, 80));
            this.setState({ props: { ...this.state.props, midSub: text1Sub.substring(0, i + 1) } });
            i++;
        }
        i = 0;
        while (i <= text1.length) {
            await new Promise(r => setTimeout(r, 100));
            this.setState({ props: { ...this.state.props, mid: text1.substring(0, i + 1) } });
            i++;
        }
    }
    async componentDidMount() {
        // await this.handleRightClick();

        window.scrollBy({
            top: -window.innerHeight,
            behavior: 'auto'
        });
        this.setState({ loading: false })
    }
    handletopHovered = () => {
        this.setState({ fadetop: false })
        this.setState({ topHovered: true });
    };

    handleTopFade = () => {
        this.setState({ fadetop: true })
        setTimeout(() => {
            this.setState({ fadetop: false });
        }, 1000);
        this.setState({ topHovered: false });
    };
    handleTopClick = async () => {
        if (this.state.props.top !== 'Skills') return;
        this.setState({ loading: true })
        await this.untypeMid();
        await this.typeMid("My Skills", -1)
        this.setState({
            isPresent: {
                top: true,
                bottom: false,
                left: true,
                right: true,
            }
        })
        this.setState({
            props: {
                ...this.state.props,
                top: <div>
                    <img src={htmlLogo} alt='' style={this.imageStyle2} />
                    <img src={bootstrapLogo} alt='' style={this.imageStyle2} />
                    Frontend
                    <img src={reactLogo} alt='' style={this.imageStyle2} />
                    <img src={cssLogo} alt='' style={this.imageStyle2} />
                </div>,
                bottom: '',
                left: <div>
                    <img src={githubLogo} alt='' style={this.imageStyle} />
                    <img src={expressLogo} alt='' style={this.imageStyle} />
                    Backend and DevOps
                    <img src={nodeLogo} alt='' style={this.imageStyle} />
                    <img src={mongodbLogo} alt='' style={this.imageStyle} />
                </div>,
                right: <div>
                    <img src={kotlinLogo} alt='' style={this.imageStyle} />
                    <img src={jsLogo} alt='' style={this.imageStyle} />
                    Programming Languages
                    <img src={cppLogo} alt='' style={this.imageStyle} />
                    <img src={pythonLogo} alt='' style={this.imageStyle} />
                </div>,

            }
        })
        this.setState({ loading: false })
    }
    handlebottomHovered = () => {
        this.setState({ fadebottom: false })
        this.setState({ bottomHovered: true });
    };
    handlebottomFade = () => {
        this.setState({ fadebottom: true })
        setTimeout(() => {
            this.setState({ fadebottom: false });
        }, 1000);
        this.setState({ bottomHovered: false });
    };
    handlebottomclick = async () => {
        console.log('bottom clicked')
        if (this.state.props.bottom !== 'About me') return;
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    handleleftHovered = () => {
        this.setState({ fadeleft: false })
        this.setState({ leftHovered: true });
    };
    handleleftFade = () => {
        this.setState({ fadeleft: true })
        setTimeout(() => {
            this.setState({ fadeleft: false });
        }, 1000);
        this.setState({ leftHovered: false });
    };
    handleLeftClick = async () => {
        if (this.state.props.left !== 'Education') return;
        this.props.showrl('left');
        await new Promise(r => setTimeout(r, 100));
        document.getElementById('education').style.transform = 'translateX(0%)';
    }
    handlerightHovered = () => {
        this.setState({ faderight: false })
        this.setState({ rightHovered: true });
    };
    handlerightFade = () => {
        this.setState({ faderight: true })
        setTimeout(() => {
            this.setState({ faderight: false });
        }, 1000);
        this.setState({ rightHovered: false });
    };
    handleRightClick = async () => {
        if (this.state.props.right !== 'Projects') return;
        this.props.showrl('right');
        await new Promise(r => setTimeout(r, 100));
        document.getElementById('projects').style.transform = 'translateX(0%)';
        
    }
    render() {
        const { dims } = this.state.props;
        const { topHovered, fadetop } = this.state;
        const { bottomHovered, fadebottom } = this.state;
        const { leftHovered, fadeleft } = this.state;
        const { rightHovered, faderight } = this.state;
        return (
            <>
                <div style={{
                    height: 925 * dims + 'px',
                    width: 925 * dims + 'px',
                    marginLeft: window.innerHeight >= window.innerWidth ? '0px' : (window.innerWidth - 925 * dims) / 2 + 'px',
                    marginTop: window.innerHeight <= window.innerWidth ? '0px' : (window.innerHeight - 925 * dims) / 2 + 'px',top:0,left:0,
                    position: 'fixed',
                }} id='maindesign'><div style={{
                    height: 650 * dims + 'px',
                    width: 650 * dims + 'px',
                    border: '6px solid #efe731',
                    borderRadius: '50%',
                    position: 'fixed',
                    left: (window.innerHeight >= window.innerWidth ? 137.5 * dims : 137.5 * dims + (window.innerWidth - 925 * dims) / 2) + 'px',
                    top: (window.innerHeight <= window.innerWidth ? 137.5 * dims : 137.5 * dims + (window.innerHeight - 925 * dims) / 2) + 'px',
                    zIndex: 0,
                }}></div>
                    <div style={{
                        height: 110 * dims + 'px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {this.state.isPresent.top && topHovered && <div style={{
                            height: 110 * dims + 'px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            fontSize: 27.5 * dims + 'px',
                            textAlign: 'center',
                            color: '#e8e252',
                            fontWeight: '600',
                            animation: 'appearslow 0.4s forwards'
                        }}>
                            {this.state.props.top}
                        </div>}
                        {
                            this.state.isPresent.top && fadetop && <div style={{
                                height: 55 * dims + 'px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                fontSize: 27.5 * dims + 'px',
                                textAlign: 'center',
                                color: '#e8e252',
                                fontWeight: '600',
                                animation: 'fadeslow 0.4s forwards'
                            }}>
                                {this.state.props.top}
                            </div>
                        }
                    </div>
                    <div style={{
                        height: 55 * dims + 'px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {this.state.isPresent.top && <div style={{
                            border: '2.5px solid #efe731',
                            borderRadius: '50%',
                            height: 55 * dims + 'px',
                            width: 55 * dims + 'px',
                            backgroundColor: '#000000',
                            zIndex: 1,
                        }}
                            onMouseOver={this.handletopHovered}
                            onMouseOut={this.handleTopFade}
                            onClick={this.handleTopClick}
                        ></div>}
                    </div>
                    <div style={{
                        height: 215 * dims + 'px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    </div>
                    <div style={{
                        height: 55 * dims + 'px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 925 * dims + 'px',
                        textAlign: 'center',
                    }}>
                        <div style={{
                            height: 55 * dims + 'px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            fontSize: 55 * dims + 'px',
                            width: 925 * dims + 'px',
                            // marginLeft: 165 * dims + 'px',
                            color: '#e8e252',
                            fontWeight: '600',
                            zIndex: 1,
                        }} className=''
                            onClick={this.goBack}
                        >
                            {this.state.props.midSub ? this.state.props.midSub : <IoMdArrowBack color='#777777' />}
                        </div></div>
                    <div style={{
                        height: 55 * dims + 'px',
                        display: 'flex',
                        justifyContent: '',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: 925 * dims + 'px'
                    }}>
                        <div style={{
                            height: 55 * dims + 'px',
                            width: 110 * dims + 'px',
                        }}>
                            {this.state.isPresent.left && leftHovered && <div style={{
                                height: 55 * dims + 'px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                fontSize: 23 * dims + 'px',
                                textAlignLast: 'center',
                                width: 110 * dims + 'px',
                                right: '0',
                                color: '#e8e252',
                                fontWeight: '600',
                                animation: 'appearslowleft 0.4s forwards'
                            }}>
                                {this.state.props.left}
                            </div>}
                            {
                                this.state.isPresent.left && fadeleft && <div style={{
                                    height: 55 * dims + 'px',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    fontSize: 23 * dims + 'px',
                                    textAlignLast: 'center',
                                    color: '#e8e252',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    animation: 'fadeslowleft 0.4s forwards'
                                }}>
                                    {this.state.props.left}
                                </div>
                            }</div>
                        <div style={{
                            height: 55 * dims + 'px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            width: 705 * dims + 'px'
                        }}>
                            {<div style={{
                                border: this.state.isPresent.left ? '2.5px solid #efe731' : '2.5px solid transparent',
                                borderRadius: '50%',
                                height: 55 * dims + 'px',
                                width: 55 * dims + 'px',
                                backgroundColor: '#000000',
                                zIndex: this.state.isPresent.left ? 1 : -1,
                            }}
                                onMouseOver={this.handleleftHovered}
                                onMouseOut={this.handleleftFade}
                                onClick={this.handleLeftClick}
                            ></div>}
                            <div className='border-only-text' style={{
                                fontSize: 55 * dims + 'px',
                                width: 450 * dims + 'px',
                                // marginLeft: 55 * dims + 'px',
                                textAlign: 'center',
                            }}>{this.state.props.mid}</div>
                            {<div style={{
                                border: this.state.isPresent.right ? '2.5px solid #efe731' : '2.5px solid transparent',
                                borderRadius: '50%',
                                height: 55 * dims + 'px',
                                width: 55 * dims + 'px',
                                backgroundColor: '#000000',
                                zIndex: this.state.isPresent.right ? 1 : -1
                            }}
                                onMouseOver={this.handlerightHovered}
                                onMouseOut={this.handlerightFade}
                                onClick={this.handleRightClick}
                            ></div>}

                        </div><div style={{
                            height: 55 * dims + 'px',
                            width: 110 * dims + 'px',
                        }}>
                            {this.state.isPresent.right && rightHovered && <div style={{
                                height: 55 * dims + 'px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                fontSize: 23 * dims + 'px',
                                textAlignLast: 'center',
                                width: 110 * dims + 'px',
                                right: '0',
                                color: '#e8e252',
                                fontWeight: '600',
                                textAlign: 'right',
                                animation: 'appearslowright 0.4s forwards'
                            }}>
                                {this.state.props.right}
                            </div>}
                            {
                                this.state.isPresent.right && faderight && <div style={{
                                    height: 55 * dims + 'px',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    fontSize: 23 * dims + 'px',
                                    textAlignLast: 'center',
                                    color: '#e8e252',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    animation: 'fadeslowright 0.4s forwards'
                                }}>
                                    {this.state.props.right}
                                </div>
                            }</div>
                    </div>
                    <div style={{
                        height: 270 * dims + 'px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    </div>
                    <div style={{
                        height: 55 * dims + 'px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {this.state.isPresent.bottom && <div style={{
                            border: '2.5px solid #efe731',
                            borderRadius: '50%',
                            height: 55 * dims + 'px',
                            width: 55 * dims + 'px',
                            backgroundColor: '#000000',
                            zIndex: 1
                        }}

                            onMouseOver={this.handlebottomHovered}
                            onMouseOut={this.handlebottomFade}
                            onClick={this.handlebottomclick}

                        ></div>}
                    </div>
                    <div style={{
                        height: 110 * dims + 'px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {
                            this.state.isPresent.bottom && bottomHovered && <div style={{
                                height: 110 * dims + 'px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: 'left',
                                fontSize: 27.5 * dims + 'px',
                                textAlignLast: 'center',
                                color: '#e8e252',
                                fontWeight: '600',
                                animation: 'appearslowbottom 0.4s forwards'
                            }}>
                                {this.state.props.bottom}
                            </div>}
                        {
                            this.state.isPresent.bottom && fadebottom && <div style={{
                                height: 110 * dims + 'px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                fontSize: 27.5 * dims + 'px',
                                textAlignLast: 'center',
                                color: '#e8e252',
                                fontWeight: '600',
                                textAlign: 'center',
                                animation: 'fadeslowbottom 0.4s forwards'
                            }}>
                                {this.state.props.bottom}
                            </div>
                        }
                    </div>
                </div>

            </>
        )
    }
}
