import React, { Component } from "react";
import classNames from "classnames";
import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppProfile } from "./AppProfile";
import { Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { FormsDemo } from "./components/FormsDemo";
import { SampleDemo } from "./components/SampleDemo";
import { DataDemo } from "./components/DataDemo";
import { PanelsDemo } from "./components/PanelsDemo";
import { OverlaysDemo } from "./components/OverlaysDemo";
import { MenusDemo } from "./components/MenusDemo";
import { MessagesDemo } from "./components/MessagesDemo";
import { ChartsDemo } from "./components/ChartsDemo";
import { MiscDemo } from "./components/MiscDemo";
import { EmptyPage } from "./components/EmptyPage";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./layout/layout.scss";
import "./App.scss";
import { TesteApp } from "./components/TesteApp";
import { DataTableDemo } from "./components/DataTableDemo";

class App extends Component {
	constructor() {
		super();
		this.state = {
			layoutMode: "static",
			layoutColorMode: "dark",
			staticMenuInactive: false,
			overlayMenuActive: false,
			mobileMenuActive: false
		};

		this.onWrapperClick = this.onWrapperClick.bind(this);
		this.onToggleMenu = this.onToggleMenu.bind(this);
		this.onSidebarClick = this.onSidebarClick.bind(this);
		this.onMenuItemClick = this.onMenuItemClick.bind(this);
		this.createMenu();
	}

	onWrapperClick(event) {
		if (!this.menuClick) {
			this.setState({
				overlayMenuActive: false,
				mobileMenuActive: false
			});
		}

		this.menuClick = false;
	}

	onToggleMenu(event) {
		this.menuClick = true;

		if (this.isDesktop()) {
			if (this.state.layoutMode === "overlay") {
				this.setState({
					overlayMenuActive: !this.state.overlayMenuActive
				});
			} else if (this.state.layoutMode === "static") {
				this.setState({
					staticMenuInactive: !this.state.staticMenuInactive
				});
			}
		} else {
			const mobileMenuActive = this.state.mobileMenuActive;
			this.setState({
				mobileMenuActive: !mobileMenuActive
			});
		}

		event.preventDefault();
	}

	onSidebarClick(event) {
		this.menuClick = true;
	}

	onMenuItemClick(event) {
		if (!event.item.items) {
			this.setState({
				overlayMenuActive: false,
				mobileMenuActive: false
			});
		}
	}

	createMenu() {
		this.menu = [
			{
				label: "Dashboard",
				icon: "pi pi-fw pi-home",
				command: () => {
					window.location = "#/";
				}
			},
			{
				label: "Dashboard2",
				icon: "pi pi-fw pi-home",
				command: () => {
					window.location = "#/2";
				}
			},
			{
				label: "Table Teste",
				icon: "pi pi-fw pi-file",
				to: "/table"
			},
			{
				label: "Teste App",
				icon: "pi pi-fw pi-file",
				to: "/teste"
			},
			{
				label: "Menu Hierarchy",
				icon: "pi pi-fw pi-search",
				items: [
					{
						label: "Submenu 1",
						icon: "pi pi-fw pi-bookmark",
						items: [
							{
								label: "Submenu 1.1",
								icon: "pi pi-fw pi-bookmark",
								items: [
									{ label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
									{ label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
									{ label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" }
								]
							},
							{
								label: "Submenu 1.2",
								icon: "pi pi-fw pi-bookmark",
								items: [
									{ label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" },
									{ label: "Submenu 1.2.2", icon: "pi pi-fw pi-bookmark" }
								]
							}
						]
					},
					{
						label: "Submenu 2",
						icon: "pi pi-fw pi-bookmark",
						items: [
							{
								label: "Submenu 2.1",
								icon: "pi pi-fw pi-bookmark",
								items: [
									{ label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
									{ label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
									{ label: "Submenu 2.1.3", icon: "pi pi-fw pi-bookmark" }
								]
							},
							{
								label: "Submenu 2.2",
								icon: "pi pi-fw pi-bookmark",
								items: [
									{ label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" },
									{ label: "Submenu 2.2.2", icon: "pi pi-fw pi-bookmark" }
								]
							}
						]
					}
				]
			}
		];
	}

	addClass(element, className) {
		if (element.classList) element.classList.add(className);
		else element.className += " " + className;
	}

	removeClass(element, className) {
		if (element.classList) element.classList.remove(className);
		else
			element.className = element.className.replace(
				new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
				" "
			);
	}

	isDesktop() {
		return window.innerWidth > 1024;
	}

	componentDidUpdate() {
		if (this.state.mobileMenuActive) this.addClass(document.body, "body-overflow-hidden");
		else this.removeClass(document.body, "body-overflow-hidden");
	}

	render() {
		const logo =
			this.state.layoutColorMode === "dark"
				? "data:image/jpeg;base64,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ocJGMaGgSMuLnZvBFr8dypafiF8Vp3jeJnfb7JsmCLwivzMTePxewf8AGrv4xX1Pr+yHyT2pdq90Hfhb53PqGzdM2JoDYy3LkLzxJv33/Co63WxqYrEV2237/wDhPhxdG1mmWrF9dWSVbKtsQkDMzHxF1nNaG3BDhssBwU2l4lGHHFJrvt7f2aZNPz25t0s0P0f7X0bKTpOlc0yOc/LlBc9xcbC5sBe29UtVn6fLN9tk2OnLXlQDC9UE0M0Mpro3CKSKQgQuGYMcHWvm2Xsulk4tF6TXk7Y27f2V66Xa2+621xVtXem2rR1fVuq46oRF7WB7Hxl3dNGUFpDhssBstw611NJxHoMfJNd/j+0q2XT89t9260F0PGG08sD5RUOmcXSHJZmXKGhmUk3Ft9991W1ernPeLRG2yTFiildkdx3VBBK8vpJ3U1zcxOZ0kQ6mbQWj0lW8PFslY2vG/wBJRX0tZneOpjYVqaja8Oqqx0rBb9HDH0d+ovLibeQA9a3ycXtMbUrt7+v7MV0kd8rNoKKOnjbDDG2OJgs1jRYAf/cVyL3te02tO8rURERtDIWrIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//2Q=="
				: "assets/layout/images/logo.svg";

		const wrapperClass = classNames("layout-wrapper", {
			"layout-overlay": false,
			"layout-static": true,
			"layout-static-sidebar-inactive": this.state.staticMenuInactive && false,
			"layout-overlay-sidebar-active": this.state.overlayMenuActive && true,
			"layout-mobile-sidebar-active": this.state.mobileMenuActive
		});

		const sidebarClassName = classNames("layout-sidebar", {
			"layout-sidebar-dark": this.state.layoutColorMode === "dark",
			"layout-sidebar-light": this.state.layoutColorMode === "light"
		});

		return (
			<div className={wrapperClass} onClick={this.onWrapperClick}>
				<AppTopbar onToggleMenu={this.onToggleMenu} />

				<div ref={(el) => (this.sidebar = el)} className={sidebarClassName} onClick={this.onSidebarClick}>
					<div className="layout-logo">
						<img alt="Logo" src={logo} />
					</div>
					<AppProfile />
					<AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
				</div>

				<div className="layout-main">
					<Route path="/" exact component={Dashboard} />
					<Route path="/2" exact component={Dashboard} />
					<Route path="/forms" component={FormsDemo} />
					<Route path="/sample" component={SampleDemo} />
					<Route path="/data" component={DataDemo} />
					<Route path="/panels" component={PanelsDemo} />
					<Route path="/overlays" component={OverlaysDemo} />
					<Route path="/menus" component={MenusDemo} />
					<Route path="/messages" component={MessagesDemo} />
					<Route path="/charts" component={ChartsDemo} />
					<Route path="/misc" component={MiscDemo} />
					<Route path="/empty" component={EmptyPage} />
					<Route path="/teste" component={TesteApp} />
					<Route path="/table" component={DataTableDemo} />
				</div>

				<AppFooter />

				<div className="layout-mask" />
			</div>
		);
	}
}

export default App;
