declare const dd: Dingtalk.dd;

declare namespace Dingtalk {
    interface CallbackParam {
        [param: string]: any;
        /**成功回调 */
        onSuccess?: Function;
        /**失败回调 */
        onFail?: (error?: any) => void;
        /**取消回调 */
        onCancel?: Function;
    }

    interface ConfigParam {
        /**微应用ID */
        agentId: string;
        /**企业ID */
        corpId: string;
        /**生成签名的时间戳 */
        timeStamp: string;
        /**生成签名的随机串 */
        nonceStr: string;
        /**签名 */
        signature: string;
        /**0表示微应用的jsapi 1表示服务窗的jsapi 不填默认为0 */
        type?: 0 | 1;
        /**需要使用的jsapi列表 不要带dd */
        jsApiList: Array<string>;
    }

    interface dd {
        /**权限验证配置 */
        config(param: ConfigParam): void;
        /**处理成功验证 */
        ready(callback: Function): void;
        /**处理失败验证 */
        error(callback: (error: any) => void): void;
        device: Device;
        biz: Biz;
        ui: Ui;
        runtime: Runtime;
        internal: Internal;
        util: Util;
        preRelease: PreRelease;
        channel: Channel;
        net: Net;
        service: Service;
        retail: Retail;
        version: string;
    }

    interface Retail {
        chat: RetailChat;
        telephone: RetailTelephone;
    }

    interface RetailTelephone {
        call(param: CallbackParam): void;
    }

    interface RetailChat {
        open(param: CallbackParam): void;
    }

    interface Service {
        request: Request;
    }

    interface Request {
        httpOverLwp(param: CallbackParam): void;
        mtop(param: CallbackParam): void;
    }

    interface Net {
        vpn: Vpn;
        tunnel: Tunnel;
    }

    interface Tunnel {
        request(param: CallbackParam): void;
    }

    interface Vpn {
        check(param: CallbackParam): void;
        start(param: CallbackParam): void;
        stop(param: CallbackParam): void;
    }

    interface Channel {
        permission: Auth;
        open: Open;
    }

    interface Open {
        profile(param: CallbackParam): void;
    }

    interface PreRelease {
        appLink: AppLink;
    }

    interface Util {
        localStorage: LocalStorage;
        domainStorage: DomainStorage;
        cookies: Cookies;
    }

    interface Cookies {
        write(param: CallbackParam): void;
        read(param: CallbackParam): void;
    }

    interface DomainStorage {
        getItem(param: CallbackParam): void;
        setItem(param: CallbackParam): void;
        removeItem(param: CallbackParam): void;
        clearItems(param: CallbackParam): void;
        listItems(param: CallbackParam): void;
    }

    interface LocalStorage {
        getItem(param: CallbackParam): void;
        setItem(param: CallbackParam): void;
        removeItem(param: CallbackParam): void;
    }

    interface Internal {
        lwp: Lwp;
        microapp: Microapp;
        user: InternalUser;
        request: InternalRequest;
        util: InternalUtil;
        log: Log;
        hpm: Hpm;
        phoneContact: PhoneContact;
        pageLink: PageLink;
        notify: InternalNotify;
        schema: Schema;
        contact: InternalContact;
        beacon: Beacon;
        host: Host;
        createOrg: CreateOrg;
        attend: Attend;
        certify: Certify;
        channel: InternalChannel;
        auth: InternalAuth;
        chat: InternalChat;
        health: InternalHealth;
        enterpriseEncryption: EnterpriseEncryption;
        faceScan: FaceScan;
        ATMBle: ATMBle;
        dingCard: DingCard;
        facialRecognition: FacialRecognition;
        alpha: Alpha;
        search: Search;
        guide: Guide;
        cspace: InternalCspace;
        safe: Safe;
        redpacket: Redpacket;
    }

    interface Redpacket {
        nav2RedPacket(param: CallbackParam): void;
    }

    interface Safe {
        getAppInfo(param: CallbackParam): void;
        getDeviceInfo(param: CallbackParam): void;
        scanPlugin(param: CallbackParam): void;
    }

    interface InternalCspace {
        decryptAndUpload(param: CallbackParam): void;
        cancelDecryptAndUpload(param: CallbackParam): void;
        openFolder(param: CallbackParam): void;
    }

    interface Guide {
        closeGuideBanner(param: CallbackParam): void;
    }

    interface Search {
        debug(param: CallbackParam): void;
    }

    interface Alpha {
        getDevicePwd(param: CallbackParam): void;
        addWdsDevice(param: CallbackParam): void;
        copyPwd(param: CallbackParam): void;
    }

    interface FacialRecognition {
        detectFace(param: CallbackParam): void;
    }

    interface DingCard {
        bindWorkMobile(param: CallbackParam): void;
        unbindWorkMobile(param: CallbackParam): void;
    }

    interface ATMBle {
        startMonitor(param: CallbackParam): void;
        stopMonitor(param: CallbackParam): void;
        checkIn(param: CallbackParam): void;
    }

    interface FaceScan {
        prepareScan(param: CallbackParam): void;
        scan(param: CallbackParam): void;
    }

    interface EnterpriseEncryption {
        info(param: CallbackParam): void;
        sendMessageToMaster(param: CallbackParam): void;
        turnOnWithAnimation(param: CallbackParam): void;
    }

    interface InternalHealth {
        getTodaysStepCount(param: CallbackParam): void;
        enableStepCountSync(param: CallbackParam): void;
        disableStepCountSync(param: CallbackParam): void;
    }

    interface InternalChat {
        pickGroupConversation(param: CallbackParam): void;
        openConversation(param: CallbackParam): void;
        selectAndSendText(param: CallbackParam): void;
        transmitMsg(param: CallbackParam): void;
        sendMultiMsges(param: CallbackParam): void;
    }

    interface InternalAuth {
        postLoginTempCode(param: CallbackParam): void;
    }

    interface InternalChannel {
        infoExist(param: CallbackParam): void;
        openPage(param: CallbackParam): void;
    }

    interface Certify {
        step(param: CallbackParam): void;
        biometric(param: CallbackParam): void;
        takePhoto(param: CallbackParam): void;
        submit(param: CallbackParam): void;
    }

    interface Attend {
        assistant(param: CallbackParam): void;
    }

    interface CreateOrg {
        industryInfo(param: CallbackParam): void;
        successJump(param: CallbackParam): void;
        lastCreateOrgInfo(param: CallbackParam): void;
    }

    interface Host {
        lwp(param: CallbackParam): void;
        query(param: CallbackParam): void;
        cancel(param: CallbackParam): void;
    }

    interface Beacon {
        detectBeacons(param: CallbackParam): void;
        detectStart(param: CallbackParam): void;
        detectStop(param: CallbackParam): void;
        bind(param: CallbackParam): void;
    }

    interface InternalContact {
        chooseMobileContact(param: CallbackParam): void;
        chooseOrgAddress(param: CallbackParam): void;
        internalComplexPicker(param: CallbackParam): void;
    }

    interface Schema {
        open(param: CallbackParam): void;
        openWifiSetting(param: CallbackParam): void;
    }

    interface InternalNotify {
        send(param: CallbackParam): void;
        add(param: CallbackParam): void;
        showModal(param: CallbackParam): void;
        closeModal(param: CallbackParam): void;
    }

    interface PageLink {
        request(param: CallbackParam): void;
        response(param: CallbackParam): void;
        fetch(param: CallbackParam): void;
    }

    interface PhoneContact {
        add(param: CallbackParam): void;
    }

    interface Hpm {
        get(param: CallbackParam): void;
        update(param: CallbackParam): void;
        queryInfo(param: CallbackParam): void;
        delete(param: CallbackParam): void;
    }

    interface Log {
        upload(param: CallbackParam): void;
        add(param: CallbackParam): void;
        uploadException(param: CallbackParam): void;
        searchQueryLog(param: CallbackParam): void;
        searchClickLog(param: CallbackParam): void;
    }

    interface InternalUtil {
        encryData(param: CallbackParam): void;
        getCorpIdByOrgId(param: CallbackParam): void;
        getOrgIdByCorpId(param: CallbackParam): void;
        isSimulator(param: CallbackParam): void;
        getWua(param: CallbackParam): void;
        chooseIndustry(param: CallbackParam): void;
        chooseRegion(param: CallbackParam): void;
        collectCell(param: CallbackParam): void;
        showAddExternalContactDialog(param: CallbackParam): void;
        getBindSmartDeviceOrgList(param: CallbackParam): void;
        authAlipayInvoice(param: CallbackParam): void;
    }

    interface InternalRequest {
        lwp(param: CallbackParam): void;
        getSecurityToken(param: CallbackParam): void;
        httpOverLWP(param: CallbackParam): void;
    }

    interface InternalUser {
        getRole(param: CallbackParam): void;
        isNewUser(param: CallbackParam): void;
        allOrganizations(param: CallbackParam): void;
        showMedalEntry(param: CallbackParam): void;
    }

    interface Microapp {
        checkInstalled(param: CallbackParam): void;
        queryInfo(param: CallbackParam): void;
        triggerSync(param: CallbackParam): void;
    }

    interface Lwp {
        call(param: CallbackParam): void;
        setSessionIdCookie(param: CallbackParam): void;
    }

    interface Runtime {
        info: Info;
        permission: Permission;
        message: Message;
        monitor: Monitor;
    }

    interface Monitor {
        usability(param: CallbackParam): void;
        enableUsability(param: CallbackParam): void;
        finishLoad(param: CallbackParam): void;
    }

    interface Message {
        post(param: CallbackParam): void;
        fetch(param: CallbackParam): void;
    }

    interface Permission {
        requestAuthCode(param: CallbackParam): void;
        requestJsApis(param: CallbackParam): void;
        requestOperateAuthCode(param: CallbackParam): void;
    }

    interface Info {
        status(param: CallbackParam): void;
    }

    interface Ui {
        input: Input;
        progressBar: ProgressBar;
        pullToRefresh: PullToRefresh;
        webViewBounce: WebViewBounce;
        nav: Nav;
        drawer: Drawer;
        tab: Tab;
        appLink: AppLink;
    }

    interface AppLink {
        open(param: CallbackParam): void;
        request(param: CallbackParam): void;
        response(param: CallbackParam): void;
        fetch(param: CallbackParam): void;
    }

    interface Tab {
        init(param: CallbackParam): void;
        start(param: CallbackParam): void;
        config(param: CallbackParam): void;
        select(param: CallbackParam): void;
        add(param: CallbackParam): void;
        remove(param: CallbackParam): void;
    }

    interface Drawer {
        init(param: CallbackParam): void;
        config(param: CallbackParam): void;
        enable(param: CallbackParam): void;
        disable(param: CallbackParam): void;
        open(param: CallbackParam): void;
        close(param: CallbackParam): void;
    }

    interface Nav {
        preload(param: CallbackParam): void;
        go(param: CallbackParam): void;
        recycle(param: CallbackParam): void;
        push(param: CallbackParam): void;
        pop(param: CallbackParam): void;
        quit(param: CallbackParam): void;
        close(param: CallbackParam): void;
        getCurrentId(param: CallbackParam): void;
    }

    interface WebViewBounce {
        enable(param: CallbackParam): void;
        disable(param: CallbackParam): void;
    }

    interface PullToRefresh {
        enable(param: CallbackParam): void;
        stop(param: CallbackParam): void;
        disable(param: CallbackParam): void;
    }

    interface ProgressBar {
        setColors(param: CallbackParam): void;
    }

    interface Input {
        plain(param: CallbackParam): void;
    }

    interface Biz {
        util: BizUtil;
        user: User;
        navigation: Navigation;
        ding: Ding;
        telephone: BizTelephone;
        chat: BizChat;
        contact: Contact;
        map: Map;
        customContact: CustomContact;
        cspace: Cspace;
        clipboardData: ClipboardData;
        intent: Intent;
        notify: Notify;
        alipay: Alipay;
        auth: Auth;
        redenvelop: Redenvelop;
        data: Data;
        microApp: MicroApp;
        calendar: Calendar;
        verify: Verify;
        faceBox: FaceBox;
        oa: Oa;
        live: Live;
        zoloz: Zoloz;
        schedule: Schedule;
    }

    interface Schedule {
        create(param: CallbackParam): void;
    }

    interface Zoloz {
        zimIdentity(param: CallbackParam): void;
        download(param: CallbackParam): void;
    }

    interface Live {
        listLiveRecords(param: CallbackParam): void;
        getLiveStatistics(param: CallbackParam): void;
        listLiveViewers(param: CallbackParam): void;
        nav2GroupAnchorList(param: CallbackParam): void;
        nav2PlayVideo(param: CallbackParam): void;
        showPlayer(param: CallbackParam): void;
        destroyPlayer(param: CallbackParam): void;
        initPlayer(param: CallbackParam): void;
        playerPlay(param: CallbackParam): void;
        playerPause(param: CallbackParam): void;
        hidePlayer(param: CallbackParam): void;
    }

    interface Oa {
        setWorkTab(param: CallbackParam): void;
        authorityVerify(param: CallbackParam): void;
    }

    interface FaceBox {
        startCameraRecord(param: CallbackParam): void;
        startPictureRecord(param: CallbackParam): void;
        removeFace(param: CallbackParam): void;
        getRecognition(param: CallbackParam): void;
        setRecognition(param: CallbackParam): void;
        showRemind(param: CallbackParam): void;
        sendMessageToContact(param: CallbackParam): void;
        experienceFunction(param: CallbackParam): void;
        startCameraRecordFromPartner(param: CallbackParam): void;
    }

    interface Verify {
        takePhoto(param: CallbackParam): void;
        biometric(param: CallbackParam): void;
    }

    interface Calendar {
        chooseOneDay(param: CallbackParam): void;
        chooseHalfDay(param: CallbackParam): void;
        chooseInterval(param: CallbackParam): void;
        chooseDateTime(param: CallbackParam): void;
        datePicker(param: CallbackParam): void;
    }

    interface MicroApp {
        visualList(param: CallbackParam): void;
    }

    interface Data {
        getAvatar(param: CallbackParam): void;
    }

    interface Redenvelop {
        sendNormalRedEnvelop(param: CallbackParam): void;
        sendEnterpriseRedEnvelop(param: CallbackParam): void;
    }

    interface Auth {
        requestAuthCode(param: CallbackParam): void;
    }

    interface Alipay {
        pay(param: CallbackParam): void;
        auth(param: CallbackParam): void;
    }

    interface Notify {
        send(param: CallbackParam): void;
    }

    interface Intent {
        fetchData(param: CallbackParam): void;
    }

    interface ClipboardData {
        setData(param: CallbackParam): void;
    }

    interface Cspace {
        preview(param: CallbackParam): void;
        saveFile(param: CallbackParam): void;
        chooseSpaceDir(param: CallbackParam): void;
        copy(param: CallbackParam): void;
    }

    interface CustomContact {
        choose(param: CallbackParam): void;
        multipleChoose(param: CallbackParam): void;
    }

    interface Map {
        search(param: CallbackParam): void;
        locate(param: CallbackParam): void;
        view(param: CallbackParam): void;
        searchRoute(param: CallbackParam): void;
    }

    interface Contact {
        createGroup(param: CallbackParam): void;
        choose(param: CallbackParam): void;
        complexChoose(param: CallbackParam): void;
        getMobileContact(param: CallbackParam): void;
        changeCustomerFollower(param: CallbackParam): void;
        complexPicker(param: CallbackParam): void;
        pickCustomer(param: CallbackParam): void;
        setRule(param: CallbackParam): void;
        departmentsPicker(param: CallbackParam): void;
        externalComplexPicker(param: CallbackParam): void;
        addFromManual(param: CallbackParam): void;
        addFromContact(param: CallbackParam): void;
        externalEditForm(param: CallbackParam): void;
        addUserForm(param: CallbackParam): void;
        chooseMobileContacts(param: CallbackParam): void;
        manageContactAlert(param: CallbackParam): void;
        complexSelectedPicker(param: CallbackParam): void;
        departmentsSelectedPicker(param: CallbackParam): void;
        pickJobTitle(param: CallbackParam): void;
        isForeignOrg(param: CallbackParam): void;
        addSubManager(param: CallbackParam): void;
    }

    interface BizChat {
        chooseConversation(param: CallbackParam): void;
        open(param: CallbackParam): void;
        getConversationInfo(param: CallbackParam): void;
        pickConversation(param: CallbackParam): void;
        chooseConversationByCorpId(param: CallbackParam): void;
        toConversation(param: CallbackParam): void;
        locationChatMessage(param: CallbackParam): void;
        openSingleChat(param: CallbackParam): void;
        addGroup(param: CallbackParam): void;
        createOrgPublicGroup(param: CallbackParam): void;
        modifyGroupDesc(param: CallbackParam): void;
    }

    interface BizTelephone {
        call(param: CallbackParam): void;
        showCallMenu(param: CallbackParam): void;
        quickCall(param: CallbackParam): void;
        callOrgExternalContacts(param: CallbackParam): void;
        quickCallList(param: CallbackParam): void;
        checkBizCall(param: CallbackParam): void;
    }

    interface Ding {
        post(param: CallbackParam): void;
        create(param: CallbackParam): void;
    }

    interface SetTitleParam extends CallbackParam {
        /**"控制标题文本 空字符串表示显示默认文本" */
        title: string;
    }

    interface Navigation {
        setLeft(param: CallbackParam): void;
        setRight(param: CallbackParam): void;
        setTitle(param: SetTitleParam): void;
        back(param: CallbackParam): void;
        replace(param: CallbackParam): void;
        createEditor(param: CallbackParam): void;
        finishEditor(param: CallbackParam): void;
        setIcon(param: CallbackParam): void;
        close(param: CallbackParam): void;
        goBack(param: CallbackParam): void;
        setMenu(param: CallbackParam): void;
        popGesture(param: CallbackParam): void;
        gestures(param: CallbackParam): void;
        setActions(param: CallbackParam): void;
        hideBar(param: CallbackParam): void;
        setPullGesture(param: CallbackParam): void;
        showPopdownList(param: CallbackParam): void;
        setSubtitle(param: CallbackParam): void;
        setTitleIcon(param: CallbackParam): void;
    }

    interface GetUserParam extends CallbackParam {
        corpId?: string;
        onSuccess?: (user: UserInfo) => void;
    }

    interface UserInfo {
        /**"用户头像地址" */
        avatar: string;
        /**"用户所在的企业Id" */
        corpId: string;
        /**"员工在企业内的UserID 企业用来唯一标识用户的字段 这个字段和你在文档看到的userId是一个id 抱歉 这个字段没有和其它接口统一命名" */
        emplId: string;
        /**"用户唯一标识ID 仅用于区分用户 这个Id是客户端加密的一个id 仅用于区分用户 不建议使用" */
        id: string;
        isAuth: boolean;
        /**"是否是企业管理员" */
        isManager: boolean;
        /**用户自己设置的昵称 */
        nick: string;
        /**"用户名" */
        nickName: string;
        /**企业管理员设置的用户名称 */
        orgUserName: string;
        rightLevel: number;
    }

    interface User {
        get(param: GetUserParam): void;
        secretID(param: CallbackParam): void;
    }


    interface BizUtilScanParam extends CallbackParam {
        /**'默认是all' */
        type?: 'all' | 'qrCode' | 'barCode';
        onSuccess?: (data?: { text: string }) => void;
    }

    interface BizUtil {
        open(param: CallbackParam): void;
        openLink(param: CallbackParam): void;
        share(param: CallbackParam): void;
        ut(param: CallbackParam): void;
        datepicker(param: CallbackParam): void;
        timepicker(param: CallbackParam): void;
        uploadImage(param: CallbackParam): void;
        previewImage(param: CallbackParam): void;
        qrcode(param: CallbackParam): void;
        datetimepicker(param: CallbackParam): void;
        chosen(param: CallbackParam): void;
        scan(param: BizUtilScanParam): void;
        uploadImageFromCamera(param: CallbackParam): void;
        pageClick(param: CallbackParam): void;
        uploadAttachment(param: CallbackParam): void;
        warn(param: CallbackParam): void;
        multiSelect(param: CallbackParam): void;
        presentWindow(param: CallbackParam): void;
        fetchImageData(param: CallbackParam): void;
        scanCard(param: CallbackParam): void;
        addDesktopShortcuts(param: CallbackParam): void;
        timestamp(param: CallbackParam): void;
        encrypt(param: CallbackParam): void;
        decrypt(param: CallbackParam): void;
        openFloatWindow(param: CallbackParam): void;
        vip(param: CallbackParam): void;
        recordVideoToUpload(param: CallbackParam): void;
        fetchFileData(param: CallbackParam): void;
        stickPage(param: CallbackParam): void;
        selectEmoji(param: CallbackParam): void;
        getLocaleAndNationByCorpId(param: CallbackParam): void;
        shareImage(param: CallbackParam): void;
        saveImage(param: CallbackParam): void;
        uploadMedia(param: CallbackParam): void;
    }

    interface Device {
        notification: Notification;
        accelerometer: Accelerometer;
        geolocation: Geolocation;
        connection: Connection;
        base: Base;
        launcher: Launcher;
        audio: Audio;
        nfc: Nfc;
        health: Health;
        screenshot: Screenshot;
        screen: Screen;
    }

    interface Screen {
        rotateView(param: CallbackParam): void;
        resetView(param: CallbackParam): void;
    }

    interface Screenshot {
        startMonitor(param: CallbackParam): void;
        stopMonitor(param: CallbackParam): void;
    }

    interface Health {
        stepCount(param: CallbackParam): void;
        dayStepCount(param: CallbackParam): void;
    }

    interface Nfc {
        nfcRead(param: CallbackParam): void;
        nfcWrite(param: CallbackParam): void;
    }

    interface Audio {
        download(param: CallbackParam): void;
        play(param: CallbackParam): void;
        onPlayEnd(param: CallbackParam): void;
        resume(param: CallbackParam): void;
        pause(param: CallbackParam): void;
        stop(param: CallbackParam): void;
        startRecord(param: CallbackParam): void;
        stopRecord(param: CallbackParam): void;
        onRecordEnd(param: CallbackParam): void;
        upload(param: CallbackParam): void;
        translateVoice(param: CallbackParam): void;
    }

    interface Launcher {
        checkInstalledApps(param: CallbackParam): void;
        launchApp(param: CallbackParam): void;
    }

    interface Base {
        getUUID(param: CallbackParam): void;
        getInterface(param: CallbackParam): void;
        getSettings(param: CallbackParam): void;
        getScanWifiList(param: CallbackParam): void;
        getWifiStatus(param: CallbackParam): void;
        enableBluetooth(param: CallbackParam): void;
        enableLocation(param: CallbackParam): void;
        startBindDevice(param: CallbackParam): void;
        unBindDevice(param: CallbackParam): void;
        getScanWifiListAsync(param: CallbackParam): void;
        scanBleDevice(param: CallbackParam): void;
        stopScanBleDevice(param: CallbackParam): void;
        connectBleDevice(param: CallbackParam): void;
        disConnectBleDevice(param: CallbackParam): void;
        sendDataToDevice(param: CallbackParam): void;
        getPhoneInfo(param: CallbackParam): void;
    }

    interface Connection {
        getNetworkType(param: CallbackParam): void;
    }

    interface Geolocation {
        get(param: CallbackParam): void;
        openGps(param: CallbackParam): void;
        start(param: CallbackParam): void;
        stop(param: CallbackParam): void;
        status(param: CallbackParam): void;
        isEnabled(param: CallbackParam): void;
        isEnabledHighAccuracy(param: CallbackParam): void;
    }

    interface Accelerometer {
        watchShake(param: CallbackParam): void;
        clearShake(param: CallbackParam): void;
    }

    interface AlertParam extends CallbackParam {
        message: string;
        title?: string;
    }

    type ToastIconType = 'success' | 'error' | '';

    interface ToastParam extends CallbackParam {
        /**'icon样式 默认为空' */
        icon?: ToastIconType;
        /**"提示信息" */
        text: string;
        /**"显示持续时间 单位秒 默认按系统规范 android只有两种 <=2s >2s" */
        duration: number;
        /**"延迟显示 单位秒 默认0" */
        delay?: number;
    }

    interface PromptParam extends CallbackParam {
        title: string;
        message?: string;
        defaultText?: string;
        buttonLabels: Array<string>;
        onSuccess?: (res: {
            /**'被点击按钮的索引值 从0开始' */
            buttonIndex: number;
            /**"输入的值" */
            value: string
        }) => void
    }

    interface Notification {
        alert(param: AlertParam): void;
        confirm(param: CallbackParam): void;
        prompt(param: PromptParam): void;
        vibrate(param: CallbackParam): void;
        toast(param: ToastParam): void;
        showPreloader(param: CallbackParam): void;
        hidePreloader(param: CallbackParam): void;
        actionSheet(param: CallbackParam): void;
        modal(param: CallbackParam): void;
        extendModal(param: CallbackParam): void;
    }
}